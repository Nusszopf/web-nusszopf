import sgMail from '@sendgrid/mail'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import { GET_LEAD } from '../../../utils/hasura/queries/newsletter.query'

export default async function unsubscribe(req, res) {
  const { email } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await getLead(email)
    await sendEmail(lead?.id, lead?.email)
    res.status(200).json({ email: lead?.email })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

const sendEmail = async (id, email) => {
  const content = {
    to: email,
    from: 'mail@nusszopf.org',
    templateId: process.env.SENDGRID_TEMPLATE_UNSUBSCRIBE_ID,
    dynamicTemplateData: {
      unsubscribe_url: `${process.env.DOMAIN}/newsletter/unsubscribe/confirm/${id}`,
    },
  }

  await sgMail.send(content)
}

const getLead = async email => {
  const res = await fetchWithAdminAuth(GET_LEAD, { email })
  return res?.leads[0]
}
