import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Menu as RMenu, Search, ChevronLeft, User, PlusCircle, LogIn } from 'react-feather'
import { Clickable } from 'reakit/Clickable'
import { useMenuState, Menu, MenuButton } from 'reakit/Menu'
import { truncate } from 'lodash'

import { Text } from '../../atoms'
import { Frame } from '../../templates'
import { useToasts } from '../../../services/Toasts.service'
import { navHeaderData as cms } from '../../../assets/data'
import { Nuss, NusszopfHeaderLogo } from '../../../assets/icons'
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
          <Clickable
            aria-label={cms.aria[4]}
            title={cms.aria[4]}
            onClick={handleNusszopf}
            className="focus:outline-none">
            <NusszopfHeaderLogo size={25} className="text-steel-100 lg:hidden" />
            <NusszopfHeaderLogo size={30} className="hidden text-steel-100 lg:block" />
          </Clickable>
          {goBackUri && (
            <Clickable
              aria-label={cms.aria[3]}
              title={cms.aria[3]}
              onClick={handleGoBack}
              className="ml-6 focus:outline-none">
              <ChevronLeft size={28} strokeWidth={2} />
            </Clickable>
          )}
        </div>
        <div className="flex items-center">
          <Clickable
            aria-label={cms.aria[0]}
            title={cms.aria[0]}
            onClick={handleSearch}
            className="mr-6 sm:mr-8 focus:outline-none">
            <Search />
          </Clickable>
          {user?.auth && (
            <Clickable
              aria-label={cms.aria[1]}
              title={cms.aria[1]}
              onClick={handleProjects}
              className="mr-6 sm:mr-8 focus:outline-none">
              <Nuss size={21.5} strokeWidth={8.5} />
            </Clickable>
          )}
          <MenuButton {...menu} className="focus:outline-none" title={cms.aria[2]} aria-label={cms.aria[2]}>
            <RMenu />
          </MenuButton>
        </div>
        <Menu {...menu} tabIndex={0} aria-label={cms.aria[2]} className="z-20 focus:outline-none reakit-animate-scale">
          <div className="py-4 mt-5 text-sm font-medium rounded-md shadow-md lg:mt-6 text-steel-800 bg-steel-400">
            <MenuItem {...menu} hasIcon={true} onClick={handleSearch}>
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
              <MenuItem {...menu} hasIcon={true} onClick={handleCreateProject}>
                <div className="flex items-center ">
                  <div className="w-6 mr-1">
                    <PlusCircle size={22} className="-ml-2" />
                  </div>
                  <Text variant="textSmMedium" className="inline-block">
                    {cms.items[4]}
                  </Text>
                </div>
              </MenuItem>
            )}
            {user?.auth ? (
              <>
                <MenuItem {...menu} hasIcon={true} onClick={handleProjects}>
                  <div className="flex items-center">
                    <div className="w-6 mr-1">
                      <Nuss size={21} strokeWidth={8.5} className="-ml-2" />
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
                      {truncate(user?.data?.name ?? cms.items[1], { length: 12 })}
                    </Text>
                  </div>
                </MenuItem>
              </>
            ) : (
              <MenuItem {...menu} hasIcon={true} onClick={handleLoginSignup}>
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
