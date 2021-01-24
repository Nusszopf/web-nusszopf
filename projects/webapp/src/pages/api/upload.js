import s3 from '../../utils/libs/s3'
import auth0 from '../../utils/libs/auth0'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import { ERROR_CONSTRAINT } from '../../utils/enums'

export default auth0.requireAuthentication(async function upload(req, res) {
  try {
    await runMiddleware(req, res, rateLimiter)
    const { file } = req.query
    const post = await s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: {
        acl: 'public-read',
        key: file,
      },
      Expires: 60, // seconds
      Conditions: [
        ['content-length-range', 0, 1048576], // up to 1 MB
      ],
    })
    res.status(200).json(post)
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
})
