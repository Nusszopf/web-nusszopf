import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment User on users {
    name
    picture
    lead {
      id
      hasConfirmed
    }
    private {
      id
      email
    }
  }
`
