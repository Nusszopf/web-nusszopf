import auth0 from '../../utils/libs/auth0'
import { handleError } from '../../utils/functions/api.function'

export default async function logout(req, res) {
  try {
    await auth0.handleLogout(req, res)
  } catch (error) {
    handleError({ res, error })
  }
}
