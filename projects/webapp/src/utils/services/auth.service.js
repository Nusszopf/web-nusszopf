import { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import apollo from './apollo.service'

export const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(() => !(typeof window !== 'undefined' && window.__user))
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }
    return window.__user || null
  })
  const { data: userData } = apollo.useGetUser(user?.sub)

  const fetchUser = async (cookie = '') => {
    if (typeof window !== 'undefined' && window.__user) {
      return window.__user
    }
    const res = await fetch('/api/me', cookie ? { headers: { cookie } } : {})
    if (!res.ok) {
      delete window.__user
      return null
    }
    const json = await res.json()
    if (typeof window !== 'undefined') {
      window.__user = json
    }
    return json
  }

  const initUser = async ({ isAuthRequired }) => {
    if (!loading && user) {
      return
    }
    setIsLoading(true)
    try {
      const user = await fetchUser()
      if (isAuthRequired && !user) {
        window.location.href = `${process.env.DOMAIN}/api/login`
        return
      }
      setUser(user)
      setIsLoading(false)
    } catch (error) {
      window.location.href = `${process.env.DOMAIN}/api/login`
      setIsLoading(false)
    }
  }

  const logout = () => {
    window.__user = null
    window.location.href = `${process.env.DOMAIN}/api/logout`
  }

  return (
    <AuthContext.Provider value={{ user: { auth: user, data: userData?.users_by_pk }, logout, initUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
  required: PropTypes.bool,
}
