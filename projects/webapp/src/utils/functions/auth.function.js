export const requireEventSecret = key => {
  if (key !== process.env.HASURA_EVENT_SECRET) {
    throw Error('constraint-violation')
  }
}
