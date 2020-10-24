import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql/language/printer'
import { INSERT_LEAD, UPDATE_LEAD, DELETE_LEAD } from '../hasura/mutations/newsletter.mutation'
import { GET_LEAD } from '../hasura/queries/newsletter.query'

export const fetchWithUserAuth = (query, variables = {}, token) => {
  const client = new GraphQLClient(process.env.API_URL, {
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return client.request(print(query), variables)
}

export const fetchWithAdminAuth = (query, variables = {}) => {
  const client = new GraphQLClient(process.env.API_URL, {
    mode: 'cors',
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
  })
  return client.request(print(query), variables)
}

export const addLead = async (email, name, privacy) => {
  const res = await fetchWithAdminAuth(INSERT_LEAD, { email, name, privacy })
  return res?.insert_leads_one
}

export const getLead = async email => {
  const res = await fetchWithAdminAuth(GET_LEAD, { email })
  return res?.leads[0]
}

export const updateLead = async id => {
  const res = await fetchWithAdminAuth(UPDATE_LEAD, { id })
  return res?.update_leads_by_pk
}

export const deleteLead = async id => {
  const res = await fetchWithAdminAuth(DELETE_LEAD, { id })
  return res?.delete_leads_by_pk
}
