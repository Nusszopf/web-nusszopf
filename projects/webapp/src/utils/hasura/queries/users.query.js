import gql from 'graphql-tag'
import { UserFragment } from '../fragments/users.fragment'

export const GET_USER = gql`
  query getUser($id: String!) {
    users_by_pk(id: $id) {
      ...User
    }
  }
  ${UserFragment}
`
