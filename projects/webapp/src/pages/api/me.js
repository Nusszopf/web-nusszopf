import auth0 from '../../utils/libs/auth0'
import { handleError } from '../../utils/functions/api.function'

export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res)
  } catch (error) {
    handleError({ res, error })
  }
}
