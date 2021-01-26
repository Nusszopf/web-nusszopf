// import s3 from '../../utils/libs/s3'
const aws = require('aws-sdk')

import auth0 from '../../utils/libs/auth0'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import { ERROR_CONSTRAINT } from '../../utils/enums'

// aws.config.update({
//   accessKeyId: process.env.SPACES_ACCESS_KEY,
//   secretAccessKey: process.env.SPACES_SECRET_KEY,
//   region: 'fra1',
//   bucketname: process.env.BUCKET_NAME,
//   endpoint: process.env.SPACES_ENDPOINT,
//   signatureVersion: 'v4',
// })

const spacesEndpoint = new aws.Endpoint(process.env.SPACES_ENDPOINT)
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_ACCESS_KEY,
  secretAccessKey: process.env.SPACES_SECRET_KEY,
})

export default auth0.requireAuthentication(async function upload(req, res) {
  console.log(process.env.SPACES_ENDPOINT)
  console.log(process.env.SPACES_ACCESS_KEY)
  console.log(process.env.SPACES_SECRET_KEY)
  try {
    await runMiddleware(req, res, rateLimiter)
    const { id, picture } = req.body
    console.log(id, picture)
    console.log('log2', picture?.includes('nz_v'))
    const isFirstUpload = !picture?.includes('nz_v') // todo führt zu false???
    const filename = createFilename(picture, id, isFirstUpload)
    const post = await s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: {
        acl: 'public-read',
        key: filename,
      },
      Expires: 60, // seconds
      Conditions: [
        ['content-length-range', 0, 1048576], // up to 1 MB
      ],
    })

    console.log('log3', decodeURIComponent(picture.split('com/')[1]))
    // todo start -> outsoure as event: 'cleanup-pictures-digitalocean'
    if (!isFirstUpload) {
      const key = decodeURIComponent(picture.split('com/')[1]) // todo check if key is okay...
      console.log('log4', key)
      await s3.deleteObject(
        {
          Bucket: process.env.BUCKET_NAME,
          Key: key,
        },
        () => {}
      )
    }
    // todo end

    res.status(200).json({ ...post, filename })
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
})

const createFilename = (picture, id, isFirstUpload) => {
  if (isFirstUpload) {
    return `${id}|nz_v1.jpeg`
  } else {
    const number = parseInt(picture.slice(0, -5).split('nz_v')[1]) + 1
    const newVersion = isNaN(number) ? 0 : number
    return `${id}|nz_v${newVersion}.jpeg`
  }
}
