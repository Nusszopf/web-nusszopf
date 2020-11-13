import { useLazyQuery, useMutation } from '@apollo/client'
import { Node } from 'slate'

import { NZ_EMAIL } from '../enums'
import { GET_USER } from '../hasura/queries/users.query'
import { DELETE_USER } from '../hasura/mutations/users.mutation'
import { DELETE_LEAD, INSERT_LEAD, UPDATE_LEAD } from '../hasura/mutations/leads.mutation'
import { INSERT_PROJECT } from '../hasura/mutations/projects.mutation'

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

// PROJECTS
const useAddProject = () => useMutation(INSERT_PROJECT)
const serializeProject = (form, user) => {
  return {
    title: form.title,
    goal: form.goal,
    descriptionTemplate: form.description,
    description: form.description.map(n => Node.string(n)).join(' '),
    location: form.location,
    period: form.period,
    teamTemplate: form.team,
    team: form.team.map(n => Node.string(n)).join(' '),
    motto: form.motto,
    visibility: form.visibility,
    contact: form.contact ? user.data.email : NZ_EMAIL,
    user_id: user.data.id,
  }
}

export default {
  useAddLead,
  useUpdateLead,
  useDeleteLead,
  useLazyGetUser,
  useDeleteUser,
  useAddProject,
  serializeProject,
}
