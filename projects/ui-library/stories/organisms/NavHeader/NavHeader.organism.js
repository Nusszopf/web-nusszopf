import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Menu as RMenu, Search, ChevronLeft, User } from 'react-feather'
import { Clickable } from 'reakit/Clickable'
import { useMenuState, Menu, MenuButton } from 'reakit/Menu'

import { Text } from '../../atoms'
import { Frame } from '../../templates'
import { useToasts } from '../../../services/Toasts.service'
import { navHeaderData as cms } from '../../../assets/data'
import MenuItem from './MenuItem'

const NavHeader = ({ user, logout, goBackUri, mode = 'internal', fixed = true }) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const { notify } = useToasts()
  const router = useRouter()
  const menu = useMenuState({ placement: 'bottom-end' })

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
    notify({ type: 'loading', message: cms.notify.login })
    if (mode === 'external') {
      router.push('https://nusszopf.org/api/login')
    } else {
      router.push('/api/login')
    }
  }

  const handleLogout = () => {
    menu.hide()
    notify({ type: 'loading', message: cms.notify.logout })
    logout()
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

  const handleGoBack = () => {
    if (goBackUri === 'back') {
      router.back()
    } else {
      router.push(goBackUri)
    }
  }

  const handleNusszopf = () => {
    menu.hide()
    if (mode === 'external') {
      router.push('https://nusszopf.org')
    } else {
      router.push('/')
    }
  }

  return (
    <Frame
      as="nav"
      className={classnames(' bg-steel-400 text-steel-800 z-20', {
        'sticky top-0 left-0 right-0': fixed,
        shadow: hasScrolled,
      })}>
      <div className={classnames('flex items-center w-full h-10 lg:h-12 justify-between relative')}>
        <div className="flex items-center">
          {goBackUri && (
            <Clickable onClick={handleGoBack} className="focus:outline-none">
              <ChevronLeft size={28} strokeWidth={2} />
            </Clickable>
          )}
        </div>
        <div className="flex items-center">
          <Clickable
            onClick={handleSearch}
            disabled={process.env.ENV === 'production'}
            className={classnames('mr-6 sm:mr-8 focus:outline-none', {
              hidden: process.env.ENV === 'production',
            })}>
            <Search />
          </Clickable>
          {user?.auth && (
            <Clickable onClick={handleProfile} className="mr-6 sm:mr-8 focus:outline-none">
              <User />
            </Clickable>
          )}
          <MenuButton {...menu} className="focus:outline-none">
            <RMenu />
          </MenuButton>
        </div>
        <Menu {...menu} tabIndex={0} aria-label="Navigation" className="z-20 focus:outline-none">
          <div
            className={classnames(
              'py-4 mt-5 lg:mt-6 text-sm font-medium rounded-md shadow-md text-steel-800 bg-steel-400 animate-scaleFade',
              {
                shadow: hasScrolled,
              }
            )}>
            <MenuItem
              {...menu}
              hasIcon={true}
              onClick={handleSearch}
              disabled={process.env.ENV === 'production'}
              className={classnames({ 'opacity-50': process.env.ENV === 'production' })}>
              <div className="flex items-center ">
                <Search className="-ml-2" />
                <Text variant="textSmMedium" className="inline-block ml-3">
                  {cms.items[0]}
                </Text>
              </div>
            </MenuItem>
            {user?.auth ? (
              <>
                <MenuItem {...menu} hasIcon={true} onClick={handleProfile}>
                  <div className="flex items-center">
                    <User className="-ml-2" />
                    <Text variant="textSmMedium" className="inline-block ml-3">
                      {user?.data?.name ?? cms.items[1]}
                    </Text>
                  </div>
                </MenuItem>
                <MenuItem {...menu} onClick={handleSettings}>
                  <Text variant="textSmMedium">{cms.items[2]}</Text>
                </MenuItem>
              </>
            ) : (
              <MenuItem
                {...menu}
                onClick={handleLoginSignup}
                disabled={process.env.ENV === 'production'}
                className={classnames({ 'opacity-50': process.env.ENV === 'production' })}>
                <Text variant="textSmMedium">{cms.items[3]}</Text>
              </MenuItem>
            )}
            <MenuItem {...menu} onClick={handleNusszopf}>
              <Text variant="textSmMedium">{cms.items[4]}</Text>
            </MenuItem>
            {user?.auth && (
              <MenuItem {...menu} onClick={handleLogout}>
                <Text className="text-warning-700" variant="textSmMedium">
                  {cms.items[5]}
                </Text>
              </MenuItem>
            )}
          </div>
        </Menu>
      </div>
    </Frame>
  )
}

NavHeader.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  fixed: PropTypes.bool,
  goBackUri: PropTypes.string,
  logout: PropTypes.func,
  mode: PropTypes.oneOf(['internal', 'external']),
}

export default NavHeader
