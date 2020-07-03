import sgClient from '@sendgrid/client'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import { UPDATE_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

export default async function subscribeConfirm(req, res) {
  const { id } = req.body
  sgClient.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const lead = await updateLead(id)
    const listId = await getNewsletterListId(sgClient)
    await createContact(sgClient, lead?.email, listId)

    res.status(200).json({ email: lead?.email })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

const getNewsletterListId = async sgClient => {
  const reqListID = {
    method: 'GET',
    url: '/v3/marketing/lists',
    qs: { page_size: '10' },
    body: '{}',
  }
  // eslint-disable-next-line no-unused-vars
  const [request, response] = await sgClient.request(reqListID)
  const list = response.result.find(list => list.name === process.env.SENDGRID_LISTNAME)
  return list.id
}

const createContact = async (sgClient, email, listId) => {
  const reqContact = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [listId],
      contacts: [{ email }],
    },
    json: true,
  }
  await sgClient.request(reqContact)
}

const updateLead = async id => {
  const res = await fetchWithAdminAuth(UPDATE_LEAD, { id })
  return res.update_leads_by_pk
}
