import gql from 'graphql-tag'

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
