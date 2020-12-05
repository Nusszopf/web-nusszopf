import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import { concatPagination } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import auth0 from './auth0'

let apolloClient
let accessToken

const requestAccessTokenClient = async () => {
  if (accessToken) return
  const res = await fetch(`${process.env.DOMAIN}/api/session`)
  if (res.ok) {
    const json = await res.json()
    accessToken = json.accessToken
  } else {
    accessToken = 'public'
  }
}

const requestAccessTokenServer = async req => {
  if (typeof req === 'undefined') {
    accessToken = 'public'
  }
  const res = await auth0.getSession(req)
  if (!res?.accessToken) {
    accessToken = 'public'
  } else {
    accessToken = res.accessToken
  }
}

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  credentials: 'include',
  fetch,
})

const authLink = ctx =>
  setContext(async (req, { headers }) => {
    if (typeof window === 'undefined') {
      await requestAccessTokenServer(ctx.req)
    } else {
      await requestAccessTokenClient()
    }
    if (!accessToken || accessToken === 'public') {
      return {
        headers,
      }
    } else {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    }
  })

const resetTokenLink = onError(({ networkError }) => {
  if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
    accessToken = null
  }
})

function createApolloClient(ctx) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink(ctx).concat(resetTokenLink).concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            users_by_pk: {
              merge: true,
            },
            projects_by_pk(_, { args, toReference }) {
              return toReference({
                __typename: 'projects',
                id: args.id,
              })
            },
            // allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState = null, ctx = null) {
  const _apolloClient = apolloClient ?? createApolloClient(ctx)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
