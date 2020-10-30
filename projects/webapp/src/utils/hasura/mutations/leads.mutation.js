import gql from 'graphql-tag'

export const INSERT_LEAD = gql`
  mutation insertLead($email: String!, $name: String!, $privacy: Boolean!) {
    insert_leads_one(
      object: { email: $email, name: $name, privacy: $privacy }
      on_conflict: { update_columns: created_at, constraint: leads_email_key }
    ) {
      id
      email
      name
    }
  }
`

export const UPDATE_LEAD = gql`
  mutation updateLead($id: uuid!) {
    update_leads_by_pk(pk_columns: { id: $id }, _set: { hasConfirmed: true }) {
      email
      name
    }
  }
`

export const DELETE_LEAD = gql`
  mutation deleteLead($email: String!) {
    delete_leads(where: { email: { _eq: $email } }) {
      affected_rows
    }
  }
`
