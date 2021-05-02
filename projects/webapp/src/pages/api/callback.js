import auth0 from '../../utils/libs/auth0'
import { handleError } from '../../utils/functions/api.function'

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res)
  } catch (error) {
    handleError({ res, error })
  }
}
