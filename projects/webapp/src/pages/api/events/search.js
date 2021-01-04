import { SearchTrigger, addRequest, updateRequest, deleteRequest } from '../../../utils/functions/search.function'
import { requireEventSecret } from '../../../utils/functions/auth.function'

export default async function search(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    switch (req.body?.event?.op) {
      case SearchTrigger.add:
        await addRequest(req.body.event.data, res)
        break
      case SearchTrigger.update:
        await updateRequest(req.body.event.data, res)
        break
      case SearchTrigger.delete:
        await deleteRequest(req.body.event.data, res)
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    console.log(error)
    // todo status code
    res.status(500).end(error.message)
  }
}
