import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment User on users {
    id
    email
  }
`
