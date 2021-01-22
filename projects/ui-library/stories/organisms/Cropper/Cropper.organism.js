import { useState, useCallback, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Cropper from 'react-easy-crop'

import { Button } from '../../atoms'
import { getCroppedImage, getCompressedImage } from './utils'

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
        reader.readAsDataURL(file)
      } catch (error) {
        reject(error)
      }
    })
  }, [])

  useImperativeHandle(ref, () => ({
    createFile: async userId => {
      try {
        const croppedImage = await getCroppedImage(image, croppedAreaPixels, rotation)
        const compressedImage = await getCompressedImage(croppedImage)
        const compressedFile = new File([compressedImage], `${userId}.jpeg`, { type: 'image/jpeg' })
        return compressedFile
      } catch (error) {
        return null
      }
    },
  }))

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
    onComplete()
  }

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)
      setImage(imageDataUrl)
    }
  }

  return (
    <div className={className}>
      {image ? (
        <>
          <div className="relative w-full h-52">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              cropShape="round"
              showGrid={false}
              aspect={1}
              onCropComplete={onCropComplete}
              onCropChange={setCrop}
              onZoomChange={setZoom}
            />
          </div>
          <div>
            <Button onClick={() => setRotation(r => (r + 90) % 360)}>rotate</Button>
            <Button onClick={() => setZoom(z => (z < 2 ? z + 0.1 : 2))}>zoom +</Button>
            <Button onClick={() => setZoom(z => (z > 1 ? z - 0.1 : 1))}>zoom -</Button>
          </div>
        </>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/png, image/jpeg" />
      )}
    </div>
  )
})

MyCropper.propTypes = {
  className: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
}

export default MyCropper
