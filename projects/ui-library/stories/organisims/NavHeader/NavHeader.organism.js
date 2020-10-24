import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Menu } from 'react-feather'
import { Clickable } from 'reakit/Clickable'

import { Route } from '../../atoms'
import { Frame } from '../../templates'

const NavHeader = ({ children, user }) => {
  return (
    <Frame as="nav" className="bg-gray-300">
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
          <Route title="Einloggen" ariaLabel="Einloggen" href="/api/login">
            Anmelden | Einloggen
          </Route>
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
