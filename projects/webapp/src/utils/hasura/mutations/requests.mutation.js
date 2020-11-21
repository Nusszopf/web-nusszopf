import gql from 'graphql-tag'
import { RequestFragment } from '../fragments/requests.fragment'

export const INSERT_REQUESTS = gql`
  mutation insertRequests($requests: [requests_insert_input!]!) {
    insert_requests(objects: $requests) {
      returning {
        ...Request
      }
    }
  }
  ${RequestFragment}
`
