import sgMail from '@sendgrid/mail'
import jwt from 'jsonwebtoken'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import runMiddleware, { rateLimiter } from '../../../utils/functions/runMiddleware.function'
import { GET_LEAD } from '../../../utils/hasura/queries/newsletter.query'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function unsubscribe(req, res) {
  await runMiddleware(req, res, rateLimiter)
  const { email } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await getLead(email)
    if (lead) {
      await sendEmail(lead)
      res.status(200).json({ email: lead?.email, name: lead?.name })
    } else {
      res.status(404).end(`lead with email ${email} was not found`)
    }
  } catch (error) {
    console.error(error)
    const status = error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT ? 400 : error.status ?? 500
    res.status(status).end(error.message)
  }
}

const sendEmail = lead => {
  return new Promise((resolve, reject) =>
    jwt.sign({ leadId: lead.id }, process.env.EMAIL_SECRET, { expiresIn: '7d' }, async (err, emailToken) => {
      const content = {
        to: lead.email,
        from: 'mail@nusszopf.org',
        templateId: process.env.SENDGRID_TEMPLATE_UNSUBSCRIBE_ID,
        dynamicTemplateData: {
          unsubscribe_url: `${process.env.DOMAIN}/newsletter/unsubscribe/${emailToken}`,
          username: lead.name,
        },
      }
      if (err) {
        reject(err)
      }
      try {
        await sgMail.send(content)
        resolve('success')
      } catch (error) {
        reject('error')
      }
    })
  )
}

const getLead = async email => {
  const res = await fetchWithAdminAuth(GET_LEAD, { email })
  return res?.leads[0]
}
