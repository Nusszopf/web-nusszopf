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

export const INSERT_REQUEST = gql`
  mutation insertRequest($request: requests_insert_input!) {
    insert_requests_one(object: $request) {
      ...Request
    }
  }
  ${RequestFragment}
`

export const UPDATE_REQUEST = gql`
  mutation updateRequest($id: uuid!, $request: requests_set_input!) {
    update_requests_by_pk(pk_columns: { id: $id }, _set: $request) {
      ...Request
    }
  }
  ${RequestFragment}
`

export const DELETE_REQUEST = gql`
  mutation deleteRequest($id: uuid!) {
    delete_requests_by_pk(id: $id) {
      id
    }
  }
`
