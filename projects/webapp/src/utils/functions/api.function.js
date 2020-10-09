import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql/language/printer'

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
