import s3 from '../../utils/libs/s3'
import auth0 from '../../utils/libs/auth0'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import { handleError } from '../../utils/functions/api.function'

export default auth0.requireAuthentication(async function upload(req, res) {
  try {
    await runMiddleware(req, res, rateLimiter)
    const { id, picture } = req.body
    const filename = createFilename(id, picture)
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

    res.status(200).json({ ...post, filename })
  } catch (error) {
    handleError({ res, error })
  }
})

const createFilename = (id, picture) => {
  const isFirstUpload = !picture?.includes('nz_v')
  if (isFirstUpload) {
    return `${id}|nz_v1.jpeg`
  } else {
    const number = parseInt(picture.slice(0, -5).split('nz_v')[1]) + 1
    const newVersion = isNaN(number) ? 0 : number
    return `${id}|nz_v${newVersion}.jpeg`
  }
}
