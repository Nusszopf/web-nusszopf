import { gql } from '@apollo/client'

export const ProjectFragment = gql`
  fragment Project on projects {
    id
    user_id
    created_at
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
