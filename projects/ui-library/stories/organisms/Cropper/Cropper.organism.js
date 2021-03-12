import { useState, useCallback, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Cropper from 'react-easy-crop'
import { ZoomIn, ZoomOut, RotateCw, Upload } from 'react-feather'

import { Button, Text } from '../../atoms'
import { getCroppedImage, getCompressedImage, getNormalizedFile } from './utils'
import { cropperData as cms } from '../../../assets/data'

const MyCropper = forwardRef(({ className, onComplete }, ref) => {
  const [image, setImage] = useState()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState()

  const readFile = useCallback(file => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        getNormalizedFile(file)
          .then(normalizedFile => reader.readAsDataURL(normalizedFile))
          .catch(error => reject(error))
      } catch (error) {
        reject(error)
      }
    })
  }, [])

  useImperativeHandle(ref, () => ({
    createImage: async () => {
      try {
        const croppedImage = await getCroppedImage(image, croppedAreaPixels, rotation)
        const compressedImage = await getCompressedImage(croppedImage)
        return compressedImage
      } catch (error) {
        return null
      }
    },
  }))

  const handleCropComplete = async (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
    onComplete()
  }

  const handleFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)
      setImage(imageDataUrl)
    }
  }

  const handleRotation = () => {
    setRotation(r => (r + 90) % 360)
  }

  const handleZoom = mode => {
    if (mode === 'in') {
      setZoom(z => (z < 3 ? z + 0.1 : 3))
    } else if (mode === 'out') {
      setZoom(z => (z > 1 ? z - 0.1 : 1))
    }
  }

  return (
    <div className={className}>
      {image ? (
        <>
          <div className="relative w-full h-96 md:h-128">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              minZoom={1}
              maxZoom={3}
              cropShape="round"
              showGrid={false}
              aspect={1}
              onCropComplete={handleCropComplete}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              disableAutomaticStylesInjection={true}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-96 md:h-128 bg-steel-700">
          <label>
            <input className="sr-only" type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
            <div
              aria-hidden="true"
              className="flex transition-transform duration-150 ease-out transform scale-100 cursor-pointer text-steel-100 hover:scale-105">
              <Upload className="mr-3" />
              <Text variant="textSm">{cms.pick}</Text>
            </div>
          </label>
        </div>
      )}
      <div className="my-5 space-x-5 text-center">
        <Button
          disabled={!image}
          className="rounded-full bg-steel-300"
          variant="clean"
          size="circle"
          onClick={handleRotation}>
          <RotateCw />
        </Button>
        <Button
          disabled={!image}
          className="rounded-full bg-steel-300"
          variant="clean"
          size="circle"
          onClick={() => handleZoom('in')}>
          <ZoomIn />
        </Button>
        <Button
          disabled={!image}
          className="rounded-full bg-steel-300"
          variant="clean"
          size="circle"
          onClick={() => handleZoom('out')}>
          <ZoomOut />
        </Button>
      </div>
    </div>
  )
})

MyCropper.propTypes = {
  className: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
}

export default MyCropper
