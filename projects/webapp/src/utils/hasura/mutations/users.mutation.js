import gql from 'graphql-tag'
import { UserFragment } from '../fragments/users.fragment'

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $picture: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { picture: $picture }) {
      ...User
    }
  }
  ${UserFragment}
`

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    delete_users_by_pk(id: $id) {
      email
      id
      lead {
        id
      }
    }
  }
`
