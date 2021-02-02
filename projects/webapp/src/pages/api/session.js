import auth0 from '../../utils/libs/auth0'
import { handleError } from '../../utils/functions/api.function'

export default async function session(req, res) {
  try {
    const tokenCache = auth0.tokenCache(req, res)
    const { accessToken } = await tokenCache.getAccessToken()
    res.status(200).json({ accessToken })
  } catch (error) {
    handleError({ res, error })
  }
}
