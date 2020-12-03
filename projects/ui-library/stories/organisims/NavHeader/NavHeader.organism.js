import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'
import { Menu as RMenu, Search, ChevronLeft, User, X } from 'react-feather'
import { Clickable } from 'reakit/Clickable'
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu'

import { Text } from '../../atoms'
import { Frame } from '../../templates'
import { useToasts } from '../../../services/Toasts.service'

const NavHeader = ({ user, goBackUri, mode = 'internal', fixed = false }) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const { notify } = useToasts()
  const router = useRouter()
  const menu = useMenuState()

  useEffect(() => {
    if (fixed) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [fixed])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  const handleLoginSignup = () => {
    menu.hide()
    notify({ type: 'loading', message: 'Du wirst einloggt oder weitergeleitet.' })
    if (mode === 'external') {
      router.push('https://nusszopf.org/api/login')
    } else {
      router.push('/api/login')
    }
  }

  const handleLogout = () => {
    menu.hide()
    notify({ type: 'loading', message: 'Du wirst abgemeldet.' })
    router.push('/api/logout')
  }

  const handleSearch = () => {
    menu.hide()
    if (mode === 'external') {
      router.push('https://nusszopf.org/search')
    } else {
      router.push('/search')
    }
  }

  const handleProfile = () => {
    menu.hide()
    router.push('/user/profile')
  }

  const handleSettings = () => {
    menu.hide()
    router.push('/user/settings')
  }

  const handlePrivacy = () => {
    menu.hide()
    if (mode === 'external') {
      router.push('https://nusszopf.org/privacy')
    } else {
      router.push('/privacy')
    }
  }

  const handeLegals = () => {
    menu.hide()
    if (mode === 'external') {
      router.push('https://nusszopf.org/legalNotice')
    } else {
      router.push('/legalNotice')
    }
  }

  const handleGoBack = () => {
    if (goBackUri === 'back') {
      router.back()
    } else {
      router.push(goBackUri)
    }
  }

  return (
    <>
      <Frame
        as="nav"
        className={classnames(' bg-steel-400 text-steel-800 z-10', {
          'fixed top-0 left-0 right-0': fixed,
          shadow: hasScrolled,
        })}>
        <div className={classnames('flex items-center w-full h-10 lg:h-12 justify-between relative')}>
          <div className="flex items-center">
            {goBackUri && (
              <Clickable onClick={handleGoBack} className={classnames(' focus:outline-none hover:text-steel-600')}>
                <ChevronLeft size={28} strokeWidth={2} />
              </Clickable>
            )}
          </div>
          <div className="flex items-center">
            <Clickable
              onClick={handleSearch}
              className={classnames('mr-6 sm:mr-8 focus:outline-none hover:text-steel-600', {
                hidden: menu.visible,
              })}>
              <Search />
            </Clickable>
            {user && (
              <Clickable
                onClick={handleProfile}
                className={classnames('mr-6 sm:mr-8 focus:outline-none hover:text-steel-600', {
                  hidden: menu.visible,
                })}>
                <User />
              </Clickable>
            )}
            <MenuButton {...menu} className="focus:outline-none hover:text-steel-600">
              {menu?.visible ? <X /> : <RMenu />}
            </MenuButton>
          </div>
          <Menu
            {...menu}
            aria-label="Preferences"
            className="z-10 w-screen px-4 pt-4 pb-8 rounded-b-lg bg-steel-400 lg:w-full lg:max-w-xs focus:outline-none">
            <div className="mx-auto max-w-max lg:ml-12">
              <MenuItem
                {...menu}
                onClick={handleSearch}
                className="flex block py-2 focus:outline-none hover:text-steel-600">
                <Search />
                <Text variant="textSmMedium" className="ml-4">
                  Suchen & Finden
                </Text>
              </MenuItem>
              {user ? (
                <>
                  <MenuItem
                    {...menu}
                    onClick={handleProfile}
                    className="flex block py-2 focus:outline-none hover:text-steel-600">
                    <User />
                    <Text variant="textSmMedium" className="ml-4">
                      {truncate(user?.name ?? 'Dein Bereich', { length: 14 })}
                    </Text>
                  </MenuItem>
                  <MenuItem
                    {...menu}
                    onClick={handleSettings}
                    className="block py-2 ml-10 focus:outline-none hover:text-steel-600">
                    <Text variant="textSmMedium">Einstellungen</Text>
                  </MenuItem>
                </>
              ) : (
                <MenuItem
                  {...menu}
                  onClick={handleLoginSignup}
                  className="block py-2 ml-10 focus:outline-none hover:text-steel-600">
                  <Text variant="textSmMedium">Anmelden</Text>
                </MenuItem>
              )}
              <MenuItem
                {...menu}
                onClick={handeLegals}
                className="block py-2 ml-10 focus:outline-none hover:text-steel-600">
                <Text variant="textSmMedium">Impressum</Text>
              </MenuItem>
              <MenuItem
                {...menu}
                onClick={handlePrivacy}
                className="block py-2 ml-10 focus:outline-none hover:text-steel-600">
                <Text variant="textSmMedium">Datenschutz</Text>
              </MenuItem>
              {user && (
                <MenuItem
                  {...menu}
                  onClick={handleLogout}
                  className="block py-2 ml-10 focus:outline-none text-warning-700">
                  <Text variant="textSmMedium">Ausloggen</Text>
                </MenuItem>
              )}
            </div>
          </Menu>
        </div>
      </Frame>
    </>
  )
}

NavHeader.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  fixed: PropTypes.bool,
  goBackUri: PropTypes.string,
  mode: PropTypes.oneOf(['internal', 'external']),
}

export default NavHeader
