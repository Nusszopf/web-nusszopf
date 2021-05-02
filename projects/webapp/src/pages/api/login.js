import auth0 from '../../utils/libs/auth0'
import { handleError } from '../../utils/functions/api.function'

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, { returnTo: '/user/projects' })
  } catch (error) {
    handleError({ res, error })
  }
}
