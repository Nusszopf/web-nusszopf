import auth0 from '../../utils/libs/auth0'

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/user/profile' })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
