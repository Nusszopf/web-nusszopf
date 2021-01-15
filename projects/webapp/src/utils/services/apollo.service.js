import { useQuery, useMutation } from '@apollo/client'

import { GET_USER } from '../hasura/queries/users.query'
import { DELETE_USER } from '../hasura/mutations/users.mutation'
import { DELETE_LEAD, INSERT_LEAD, UPDATE_LEAD } from '../hasura/mutations/leads.mutation'
import { INSERT_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../hasura/mutations/projects.mutation'
import { GET_PROJECT, GET_USER_PROJECTS, GET_LATEST_PROJECTS_CROP } from '../hasura/queries/projects.query'
import { INSERT_REQUESTS, INSERT_REQUEST, UPDATE_REQUEST, DELETE_REQUEST } from '../hasura/mutations/requests.mutation'

// USERS
const useGetUser = id => useQuery(GET_USER, { skip: !id, variables: { id } })

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
      const res = cache.readQuery({ query: GET_USER, variables: { id } })
      cache.writeQuery({
        query: GET_USER,
        variables: { id },
        data: {
          users_by_pk: {
            ...res.users_by_pk,
            lead: {
              ...data.update_leads_by_pk,
            },
          },
        },
      })
    },
  })

// PROJECTS
const useGetProject = id => useQuery(GET_PROJECT, { skip: !id, variables: { id } })

const useGetLatestProjects = () => useQuery(GET_LATEST_PROJECTS_CROP)

const useGetProjects = (id, options = {}) =>
  useQuery(GET_USER_PROJECTS, {
    ...options,
    variables: { id },
  })

const useAddProject = id =>
  useMutation(INSERT_PROJECT, {
    update: (cache, { data }) => {
      const res = cache.readQuery({ query: GET_USER_PROJECTS, variables: { id } })
      cache.writeQuery({
        query: GET_USER_PROJECTS,
        variables: { id },
        data: { projects: [data?.insert_projects_one, ...res.projects] },
      })
    },
  })

const useUpdateProject = () => useMutation(UPDATE_PROJECT)

const useDeleteProject = () =>
  useMutation(DELETE_PROJECT, {
    update: (cache, { data }) => {
      cache.evict({ id: `projects:${data.delete_projects_by_pk.id}` })
    },
  })

// REQUESTS
const useAddRequests = id =>
  useMutation(INSERT_REQUESTS, {
    update: (cache, { data }) => {
      const projectId = data.insert_requests.returning[0].project_id
      const requests = data.insert_requests.returning
      const { projects } = cache.readQuery({ query: GET_USER_PROJECTS, variables: { id } })
      const updatedProjects = projects.map(project => (project.id === projectId ? { ...project, requests } : project))
      cache.writeQuery({
        query: GET_USER_PROJECTS,
        variables: { id },
        data: { projects: updatedProjects },
      })
    },
  })
const useAddRequest = id =>
  useMutation(INSERT_REQUEST, {
    update: (cache, { data }) => {
      const res = cache.readQuery({ query: GET_PROJECT, variables: { id } })
      const requests = [data.insert_requests_one, ...res.projects_by_pk.requests]
      cache.writeQuery({
        query: GET_PROJECT,
        variables: { id },
        data: { projects_by_pk: { ...res.projects_by_pk, requests } },
      })
    },
  })
const useUpdateRequest = () => useMutation(UPDATE_REQUEST)
const useDeleteRequest = () =>
  useMutation(DELETE_REQUEST, {
    update: (cache, { data }) => {
      cache.evict({ id: `requests:${data.delete_requests_by_pk.id}` })
    },
  })

export default {
  useAddLead,
  useUpdateLead,
  useDeleteLead,
  useGetUser,
  useDeleteUser,
  useGetProject,
  useGetProjects,
  useGetLatestProjects,
  useAddProject,
  useUpdateProject,
  useDeleteProject,
  useAddRequests,
  useAddRequest,
  useUpdateRequest,
  useDeleteRequest,
}
