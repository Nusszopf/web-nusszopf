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
