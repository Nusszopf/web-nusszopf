import sgMail from '@sendgrid/mail'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import { INSERT_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

export default async function subscribe(req, res) {
  const { email } = req.body
  console.log(email)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await addLead(email)
    await sendEmail(lead?.id, lead?.email)
    res.status(200).json({ email: lead?.email })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
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
