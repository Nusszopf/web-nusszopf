import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql/language/printer'
import { INSERT_LEAD, UPDATE_LEAD, DELETE_LEAD } from '../hasura/mutations/leads.mutation'
import { GET_LEAD } from '../hasura/queries/newsletter.query'
import { GET_USER } from '../hasura/queries/users.query'
import { GET_PROJECT_CROP, GET_ALL_PUBLIC_PROJECTS } from '../hasura/queries/projects.query'
import { ERROR_CONSTRAINT } from '../../utils/enums'

export const handleError = ({ res, error }) => {
  console.error(error)
  const isUnauthorized = error.message?.includes('jwt')
  const isForbidden = error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT
  if (isUnauthorized || isForbidden) {
    res.status(400).end(error.message)
  } else if (error.status) {
    res.status(error.status).end(error.message)
  } else {
    res.status(500).end(error.message)
  }
}

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

export const getUser = async id => {
  const res = await fetchWithAdminAuth(GET_USER, { id })
  return res?.users_by_pk
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

export const deleteLead = async email => {
  const res = await fetchWithAdminAuth(DELETE_LEAD, { email })
  return res?.delete_leads?.affected_rows
}

export const getProjectCrop = async id => {
  const res = await fetchWithAdminAuth(GET_PROJECT_CROP, { id })
  return res?.projects_by_pk
}

export const getPublicProjects = async () => {
  const res = await fetchWithAdminAuth(GET_ALL_PUBLIC_PROJECTS)
  return res?.projects
}
