import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_USER } from '../hasura/queries/users.query'
import { DELETE_USER } from '../hasura/mutations/users.mutation'
import { DELETE_LEAD, INSERT_LEAD, UPDATE_LEAD } from '../hasura/mutations/leads.mutation'

// USERS
const useLazyGetUser = id =>
  useLazyQuery(GET_USER, {
    variables: { id },
    // fetchPolicy: 'cache-and-network',
  })

const useDeleteUser = () => useMutation(DELETE_USER)

// LEADS
const useAddLead = () => useMutation(INSERT_LEAD)

const useDeleteLead = () =>
  useMutation(DELETE_LEAD, {
    update: (cache, { data }) => {
      cache.evict({ id: `leads:${data.delete_leads.returning[0].id}` })
    },
  })

const useUpdateLead = id =>
  useMutation(UPDATE_LEAD, {
    update: (cache, { data: { update_leads_by_pk } }) => {
      cache.writeQuery({
        query: GET_USER,
        variables: { id },
        data: {
          users_by_pk: {
            lead: {
              id: update_leads_by_pk.id,
            },
          },
        },
      })
    },
  })

export default {
  useAddLead,
  useUpdateLead,
  useDeleteLead,
  useLazyGetUser,
  useDeleteUser,
}
