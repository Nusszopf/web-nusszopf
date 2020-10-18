import sgMail from '@sendgrid/mail'
import sgClient from '@sendgrid/client'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import {
  handleSubscribe,
  handleSubscribeConfirm,
  handleUnsubscribe,
  handleUnsubscribeConfirm,
  NewsletterType,
} from '../../utils/functions/newsletter.function'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function newsletter(req, res) {
  await runMiddleware(req, res, rateLimiter)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgClient.setApiKey(process.env.SENDGRID_API_KEY)
  const { action } = req.body
  try {
    switch (action) {
      case NewsletterType.subscribe:
        await handleSubscribe(req.body, res, sgMail)
        break
      case NewsletterType.subscribeConfirm:
        await handleSubscribeConfirm(req.body, res, sgClient)
        break
      case NewsletterType.unsubscribe:
        await handleUnsubscribe(req.body, res, sgMail)
        break
      case NewsletterType.unsubscribeConfirm:
        await handleUnsubscribeConfirm(req.body, res, sgClient)
        break
    }
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
}
