import { useLazyQuery, useQuery, useMutation } from '@apollo/client'

import { GET_USER } from '../hasura/queries/users.query'
import { DELETE_USER } from '../hasura/mutations/users.mutation'
import { DELETE_LEAD, INSERT_LEAD, UPDATE_LEAD } from '../hasura/mutations/leads.mutation'
import { INSERT_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../hasura/mutations/projects.mutation'
import { GET_PROJECT, GET_USER_PROJECTS } from '../hasura/queries/projects.query'

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
    update: (cache, { data }) => {
      cache.writeQuery({
        query: GET_USER,
        variables: { id },
        data: {
          users_by_pk: {
            lead: {
              id: data.update_leads_by_pk.id,
            },
          },
        },
      })
    },
  })

// PROJECTS
const useGetProject = id => useQuery(GET_PROJECT, { skip: !id, variables: { id } })

const useLazyGetProjects = id =>
  useLazyQuery(GET_USER_PROJECTS, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  })

const useAddProject = () => useMutation(INSERT_PROJECT)

const useUpdateProject = () => useMutation(UPDATE_PROJECT)

const useDeleteProject = () =>
  useMutation(DELETE_PROJECT, {
    update: (cache, { data }) => {
      cache.evict({ id: `projects:${data.delete_projects_by_pk.id}` })
    },
  })

export default {
  useAddLead,
  useUpdateLead,
  useDeleteLead,
  useLazyGetUser,
  useDeleteUser,
  useGetProject,
  useLazyGetProjects,
  useAddProject,
  useUpdateProject,
  useDeleteProject,
}
