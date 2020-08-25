import sgClient from '@sendgrid/client'
import jwt from 'jsonwebtoken'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import runMiddleware, { rateLimiter } from '../../../utils/functions/runMiddleware.function'
import { UPDATE_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function subscribeConfirm(req, res) {
  await runMiddleware(req, res, rateLimiter)
  const { token } = req.body
  sgClient.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const { leadId } = jwt.verify(token, process.env.EMAIL_SECRET)
    const lead = await updateLead(leadId)
    await createContact(sgClient, process.env.SENDGRID_LIST_ID, lead?.email, lead?.name)
    res.status(200).json({ email: lead?.email, name: lead?.name })
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
}

const createContact = async (sgClient, listId, email, name) => {
  const reqContact = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [listId],
      contacts: [{ email, first_name: name }],
    },
    json: true,
  }
  await sgClient.request(reqContact)
}

const updateLead = async id => {
  const res = await fetchWithAdminAuth(UPDATE_LEAD, { id })
  return res.update_leads_by_pk
}
