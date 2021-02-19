import Compressor from 'compressorjs'

const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

const getRadianAngle = degreeValue => {
  return (degreeValue * Math.PI) / 180
}

export const getCroppedImage = async (imageSrc, pixelCrop, rotation = 0) => {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  canvas.width = safeArea
  canvas.height = safeArea
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea / 2, -safeArea / 2)
  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5)

  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  return new Promise(resolve => {
    canvas.toBlob(file => {
      resolve(file)
    }, 'image/jpeg')
  })
}

export const getCompressedImage = file => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 150,
      maxHeight: 150,
      success(compressedImage) {
        resolve(compressedImage)
      },
      error(error) {
        reject(error)
      },
    })
  })
}

// https://github.com/ricardo-ch/react-easy-crop/issues/91
export const getNormalizedFile = file => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      maxWidth: 1000,
      maxHeight: 1000,
      success(normalizedFile) {
        resolve(normalizedFile)
      },
      error(error) {
        reject(error)
      },
    })
  })
}
