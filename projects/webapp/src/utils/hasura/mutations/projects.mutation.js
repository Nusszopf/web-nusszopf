import gql from 'graphql-tag'
import { ProjectFragment } from '../fragments/projects.fragment'

export const INSERT_PROJECT = gql`
  mutation insertProject($project: projects_insert_input!) {
    insert_projects_one(object: $project) {
      ...Project
    }
  }
  ${ProjectFragment}
`

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: String!) {
    delete_projects_by_pk(id: $id) {
      id
    }
  }
`

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: String!, $project: projects_set_input!) {
    update_projects_by_pk(pk_columns: { id: $id }, _set: $project) {
      ...Project
    }
  }
  ${ProjectFragment}
`
