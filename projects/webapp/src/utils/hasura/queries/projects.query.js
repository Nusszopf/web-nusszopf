import gql from 'graphql-tag'
import { ProjectFragment } from '../fragments/projects.fragment'

export const GET_USER_PROJECTS = gql`
  query getUserProjects($id: String!) {
    projects(where: { user_id: { _eq: $id } }, order_by: { created_at: desc }) {
      ...Project
    }
  }
  ${ProjectFragment}
`

export const GET_PROJECT = gql`
  query getProject($id: String!) {
    projects_by_pk(id: $id) {
      ...Project
    }
  }
  ${ProjectFragment}
`
