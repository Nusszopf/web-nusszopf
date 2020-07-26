import sgMail from '@sendgrid/mail'
import jwt from 'jsonwebtoken'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import runMiddleware, { rateLimiter } from '../../../utils/functions/runMiddleware.function'
import { INSERT_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function subscribe(req, res) {
  await runMiddleware(req, res, rateLimiter)
  const { email, name = 'test' } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await addLead(email, name)
    sendEmail(lead)
    res.status(200).json({ email: lead?.email, name: lead?.name })
  } catch (error) {
    console.error(error)
    const status = error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT ? 400 : error.status ?? 500
    res.status(status).end(error.message)
  }
}

const sendEmail = lead => {
  jwt.sign({ leadId: lead.id }, process.env.EMAIL_SECRET, { expiresIn: '7d' }, (err, emailToken) => {
    const content = {
      to: lead.email,
      from: 'mail@nusszopf.org',
      templateId: process.env.SENDGRID_TEMPLATE_SUBSCRIBE_ID,
      dynamicTemplateData: {
        subscribe_url: `${process.env.DOMAIN}/newsletter/subscribe/confirm/${emailToken}`,
        username: lead.name,
      },
    }
    sgMail.send(content)
  })
}

const addLead = async (email, name) => {
  const res = await fetchWithAdminAuth(INSERT_LEAD, { email, name })
  return res?.insert_leads_one
}
