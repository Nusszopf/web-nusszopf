import gql from 'graphql-tag'

export const INSERT_LEAD = gql`
  mutation insertLead($email: String!) {
    insert_leads_one(object: { email: $email }) {
      id
      email
    }
  }
`

export const UPDATE_LEAD = gql`
  mutation updateLead($id: uuid!) {
    update_leads_by_pk(pk_columns: { id: $id }, _set: { isAuthenticated: true }) {
      email
    }
  }
`

export const DELETE_LEAD = gql`
  mutation deleteLead($id: uuid!) {
    delete_leads_by_pk(id: $id) {
      email
    }
  }
`
