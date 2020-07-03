import sgMail from '@sendgrid/mail'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import runMiddleware, { rateLimiter } from '../../../utils/functions/runMiddleware.function'
import { INSERT_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function subscribe(req, res) {
  await runMiddleware(req, res, rateLimiter)
  const { email } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await addLead(email)
    await sendEmail(lead?.id, lead?.email)
    res.status(200).json({ email: lead?.email })
  } catch (error) {
    console.error(error)
    const status = error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT ? 400 : error.status ?? 500
    res.status(status || 500).end(error.message)
  }
}

const sendEmail = async (id, mail) => {
  const content = {
    to: mail,
    from: 'mail@nusszopf.org',
    templateId: process.env.SENDGRID_TEMPLATE_SUBSCRIBE_ID,
    dynamicTemplateData: {
      subscribe_url: `${process.env.DOMAIN}/newsletter/subscribe/confirm/${id}`,
    },
  }
  await sgMail.send(content)
}

const addLead = async email => {
  const res = await fetchWithAdminAuth(INSERT_LEAD, { email })
  return res?.insert_leads_one
}
