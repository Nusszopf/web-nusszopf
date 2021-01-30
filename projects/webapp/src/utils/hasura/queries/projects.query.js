import gql from 'graphql-tag'
import { ProjectFragment, ProjectCropFragment } from '../fragments/projects.fragment'

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

export const GET_PROJECT_CROP = gql`
  query getProjectCrop($id: String!) {
    projects_by_pk(id: $id) {
      ...ProjectCrop
    }
  }
  ${ProjectCropFragment}
`

export const GET_LATEST_PROJECTS_CROP = gql`
  query getLatestProjects {
    projects(
      where: { requests: { _not: { id: { _is_null: true } } }, visibility: { _eq: "public" } }
      order_by: { created_at: desc }
      limit: 6
    ) {
      ...ProjectCrop
    }
  }
  ${ProjectCropFragment}
`

export const GET_ALL_PUBLIC_PROJECTS = gql`
  query getLatestProjects {
    projects(where: { visibility: { _eq: "public" } }) {
      id
      created_at
    }
  }
`
