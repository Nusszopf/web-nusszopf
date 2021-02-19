import { useEffect } from 'react'
import { useAuth } from '~/utils/services/auth.service'

const withAuth = (WrappedComponent, { isAuthRequired }) => {
  const WithAuth = props => {
    const { initUser, user } = useAuth()

    useEffect(() => {
      initUser({ isAuthRequired })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return isAuthRequired ? (
      <WrappedComponent user={user} loading={!user?.data} {...props} />
    ) : (
      <WrappedComponent {...props} />
    )
  }

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`
  return WithAuth
}

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'HOC:withAuth'
}

export default withAuth
