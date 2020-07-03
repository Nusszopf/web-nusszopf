import gql from 'graphql-tag'

export const GET_LEAD = gql`
  query getLead($email: String!) {
    leads(where: { email: { _eq: $email } }) {
      id
      email
      isAuthenticated
    }
  }
`
