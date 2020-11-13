import { gql } from '@apollo/client'

export const ProjectFragment = gql`
  fragment Project on projects {
    id
    title
    goal
    descriptionTemplate
    description
    location
    period
    teamTemplate
    team
    motto
    visibility
    contact
  }
`
