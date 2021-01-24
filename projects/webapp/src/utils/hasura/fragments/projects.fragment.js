import { gql } from '@apollo/client'
import { RequestFragment, RequestCropFragment } from './requests.fragment'

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
    requests(order_by: { created_at: desc }) {
      ...Request
    }
    user {
      name
      picture
    }
  }
  ${RequestFragment}
`

export const ProjectCropFragment = gql`
  fragment ProjectCrop on projects {
    id
    title
    goal
    visibility
    requests {
      ...RequestCrop
    }
    user {
      name
    }
  }
  ${RequestCropFragment}
`
