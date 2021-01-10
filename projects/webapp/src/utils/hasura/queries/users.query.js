import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser($id: String!) {
    users_by_pk(id: $id) {
      id
      email
      name
      lead {
        id
        hasConfirmed
      }
    }
  }
`
