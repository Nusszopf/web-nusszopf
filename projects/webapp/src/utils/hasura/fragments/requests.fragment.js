import { gql } from '@apollo/client'

export const RequestFragment = gql`
  fragment Request on requests {
    id
    project_id
    created_at
    title
    category
    descriptionTemplate
    description
  }
`
