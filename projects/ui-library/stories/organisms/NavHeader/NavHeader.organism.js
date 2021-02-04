import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Menu as RMenu, Search, ChevronLeft, User, PlusCircle, LogIn, Folder } from 'react-feather'
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
  const menu = useMenuState({ placement: 'bottom-end', animated: 150 })

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

  const handleCreateProject = () => {
    menu.hide()
    if (user?.auth) {
      router.push('/user/project/create')
    } else {
      router.push('/api/login')
    }
  }

  const handleProjects = () => {
    menu.hide()
    router.push('/user/projects')
  }

  const handleProfile = () => {
    menu.hide()
    router.push('/user/profile')
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
            <Clickable
              aria-label={cms.aria[3]}
              title={cms.aria[3]}
              onClick={handleGoBack}
              className="focus:outline-none">
              <ChevronLeft size={28} strokeWidth={2} />
            </Clickable>
          )}
        </div>
        <div className="flex items-center">
          <Clickable
            aria-label={cms.aria[0]}
            title={cms.aria[0]}
            onClick={handleSearch}
            disabled={process.env.ENV === 'production'}
            className={classnames('mr-6 sm:mr-8 focus:outline-none', {
              hidden: process.env.ENV === 'production',
            })}>
            <Search />
          </Clickable>
          {user?.auth && (
            <Clickable
              aria-label={cms.aria[1]}
              title={cms.aria[1]}
              onClick={handleProjects}
              className="mr-6 sm:mr-8 focus:outline-none">
              <Folder size={20} strokeWidth={2.2} />
            </Clickable>
          )}
          <MenuButton {...menu} className="focus:outline-none" title={cms.aria[2]} aria-label={cms.aria[2]}>
            <RMenu />
          </MenuButton>
        </div>
        <Menu {...menu} tabIndex={0} aria-label={cms.aria[2]} className="z-20 focus:outline-none reakit-animate-scale">
          <div
            className={classnames(
              'py-4 mt-5 lg:mt-6 text-sm font-medium rounded-md shadow-md text-steel-800 bg-steel-400',
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
                <div className="w-6 mr-1">
                  <Search className="-ml-2" />
                </div>
                <Text variant="textSmMedium" className="inline-block">
                  {cms.items[0]}
                </Text>
              </div>
            </MenuItem>
            {mode === 'internal' && (
              <MenuItem
                {...menu}
                hasIcon={true}
                onClick={handleCreateProject}
                disabled={process.env.ENV === 'production'}
                className={classnames({ 'opacity-50': process.env.ENV === 'production' })}>
                <div className="flex items-center ">
                  <div className="w-6 mr-1">
                    <PlusCircle size={22} className="-ml-2" />
                  </div>
                  <Text variant="textSmMedium" className="inline-block">
                    {cms.items[6]}
                  </Text>
                </div>
              </MenuItem>
            )}
            {user?.auth ? (
              <>
                <MenuItem {...menu} hasIcon={true} onClick={handleProjects}>
                  <div className="flex items-center">
                    <div className="w-6 mr-1">
                      <Folder className="-ml-1.5" size={20} strokeWidth={2.2} />
                    </div>
                    <Text variant="textSmMedium" className="inline-block">
                      {cms.items[2]}
                    </Text>
                  </div>
                </MenuItem>
                <MenuItem {...menu} hasIcon={true} onClick={handleProfile}>
                  <div className="flex items-center">
                    <div className="w-6 mr-1">
                      <User className="-ml-2" />
                    </div>
                    <Text variant="textSmMedium" className="inline-block">
                      {user?.data?.name ?? cms.items[1]}
                    </Text>
                  </div>
                </MenuItem>
              </>
            ) : (
              <MenuItem
                {...menu}
                hasIcon={true}
                onClick={handleLoginSignup}
                disabled={process.env.ENV === 'production'}
                className={classnames({ 'opacity-50': process.env.ENV === 'production' })}>
                <div className="flex items-center">
                  <div className="w-6 mr-1">
                    <LogIn size={23} className="-ml-2" />
                  </div>
                  <Text variant="textSmMedium" className="inline-block">
                    {cms.items[3]}
                  </Text>
                </div>
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
