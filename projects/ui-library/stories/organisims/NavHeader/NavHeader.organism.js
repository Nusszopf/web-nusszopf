import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Menu } from 'react-feather'
import { Clickable } from 'reakit/Clickable'

import { Text } from '../../atoms'
import { Frame } from '../../templates'
import { useToasts } from '../../../services/Toasts.service'

const NavHeader = ({ children, user }) => {
  const { notify } = useToasts()
  const router = useRouter()

  const handleLoginSignup = () => {
    notify({ type: 'loading', message: 'Du wirst einloggt oder weitergeleitet.' })
    router.push('/api/login')
  }

  return (
    <Frame as="nav" className="bg-gray-200">
      <div
        className={classnames('flex items-center w-full h-10 lg:h-12', {
          'justify-between': children,
          'justify-end': !children,
        })}>
        {children}
        {user ? (
          <Clickable onClick={console.log} className="text-gray-700 focus:outline-none">
            <Menu />
          </Clickable>
        ) : (
          <Clickable onClick={handleLoginSignup} className="text-gray-700 focus:outline-none hover:text-gray-500">
            <Text variant="textSm">Anmelden | Einloggen</Text>
          </Clickable>
        )}
      </div>
    </Frame>
  )
}

NavHeader.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
}

export default NavHeader
