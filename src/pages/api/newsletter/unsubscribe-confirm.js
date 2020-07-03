/* eslint-disable no-unused-vars */
import sgClient from '@sendgrid/client'
import { fetchWithAdminAuth } from '../../../utils/functions/api.function'
import { DELETE_LEAD } from '../../../utils/hasura/mutations/newsletter.mutation'

export default async function unsubscribeConfirm(req, res) {
  const { id } = req.body

  sgClient.setApiKey(process.env.SENDGRID_API_KEY)

  try {
    const lead = await deleteLead(id)
    const listId = await getNewsletterListId(sgClient)
    const [response, body] = await getContact(sgClient, lead?.email, listId)
    const contactId = body.result[0].id
    await deleteContact(sgClient, contactId)
    res.status(200).json({ email: lead?.email })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

const deleteContact = async (sgClient, leadId) => {
  const reqContact = {
    method: 'DELETE',
    url: `/v3/marketing/contacts?ids=${leadId}`,
    body: '{}',
  }

  await sgClient.request(reqContact)
}

const getContact = async (sgClient, email, listId) => {
  const reqContact = {
    method: 'POST',
    url: '/v3/marketing/contacts/search',
    body: {
      query: `email LIKE '${email}' AND CONTAINS(list_ids, '${listId}')`,
    },
    json: true,
  }

  return await sgClient.request(reqContact)
}

const getNewsletterListId = async sgClient => {
  const reqListID = {
    method: 'GET',
    url: '/v3/marketing/lists',
    qs: { page_size: '10' },
    body: '{}',
  }

  const [request, response] = await sgClient.request(reqListID)
  const list = response.result.find(list => list.name === process.env.SENDGRID_LISTNAME)
  return list.id
}

const deleteLead = async id => {
  const res = await fetchWithAdminAuth(DELETE_LEAD, { id })
  return await res?.delete_leads_by_pk
}
