import gql from 'graphql-tag'

export const DELETE_USER = gql`
  mutation deleteUser($id: uuid!) {
    delete_users_py_bk(id: $id) {
      id
      email
      lead
    }
  }
`
