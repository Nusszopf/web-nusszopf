import { useEffect } from 'react'
import apollo from './services/apollo.service'
import { useFetchUser } from './services/auth.service'

export const uniqByKeepLast = (array, fn) => {
  return [...new Map(array.map(item => [fn(item), item])).values()]
}

export const sortByDate = (timestampA, timestampB, order) => {
  var dateA = new Date(timestampA).getTime()
  var dateB = new Date(timestampB).getTime()
  if (order === 'asc') {
    return dateA > dateB ? 1 : -1
  } else {
    return dateA < dateB ? 1 : -1
  }
}

export const useUser = () => {
  const { user } = useFetchUser({ required: true })
  const [loadData, { loading, data }] = apollo.useLazyGetUser(user?.sub)

  useEffect(() => {
    if (user) loadData()
  }, [user, loadData])

  return { auth: user, data: data?.users_by_pk, loading }
}
