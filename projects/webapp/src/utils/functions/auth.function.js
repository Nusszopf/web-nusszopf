const jwt = require('jsonwebtoken')

export const requireSessionToken = req => {
  const token = req.headers.authorization.split(' ')[1]
  const key = process.env.AUTH0_JWT_SECRET.replace(/\\n/gm, '\n')
  jwt.verify(token, key)
  return token
}

export const requireEventSecret = key => {
  if (key !== process.env.HASURA_EVENT_SECRET) {
    throw Error('constraint-violation')
  }
}
