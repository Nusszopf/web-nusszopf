import sgMail from '@sendgrid/mail'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import {
  handleSubscribe,
  handleSubscribeConfirm,
  handleUnsubscribe,
  handleUnsubscribeConfirm,
  handleAuth0SyncHasura,
  NewsletterType,
} from '../../utils/functions/newsletter.function'
import { handleError } from '../../utils/functions/api.function'

export default async function newsletter(req, res) {
  try {
    await runMiddleware(req, res, rateLimiter)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { action } = req.body
    switch (action) {
      case NewsletterType.subscribe:
        await handleSubscribe(req.body, res, sgMail)
        break
      case NewsletterType.subscribeConfirm:
        await handleSubscribeConfirm(req.body, res)
        break
      case NewsletterType.unsubscribe:
        await handleUnsubscribe(req.body, res, sgMail)
        break
      case NewsletterType.unsubscribeConfirm:
        await handleUnsubscribeConfirm(req.body, res)
        break
      case NewsletterType.auth0SyncHasura:
        await handleAuth0SyncHasura(req.body, res)
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    handleError({ res, error })
  }
}
