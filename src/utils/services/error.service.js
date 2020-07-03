export const logError = message => {
  const query = `
    mutation logError($message: String!) {
      insert_errors(objects: {message: $message}) {
        affected_rows
      }
    }
  `
  const graphqlReq = { query, variables: { message } }
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphqlReq),
  }
  fetch(process.env.API_URL, opts)
}
