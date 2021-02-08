import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { Text, Select } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { withAuth } from '~/utils/hoc'
import apollo from '~/utils/services/apollo.service'
import { Page } from '~/components'
import { ProjectView, RequestsView, SettingsView, SkeletonView } from '~/containers/user/EditProjectViews'
import { editProjectsViewsData as cms } from '~/assets/data'

const projectEditData = {
  nav: ['Beschreibung', 'Gesuche', 'Einstellungen'],
}

const ProjectEdit = ({ user, loading: loadingUser }) => {
  const router = useRouter()
  const projectViewRef = useRef()
  const settingsViewRef = useRef()
  const [view, setView] = useState(projectEditData.nav[0])
  const { data: projectData, loading: loadingProject } = apollo.useGetProject(router.query?.id)

  useEffect(() => {
    if (router.query?.id && !loadingProject && !projectData) {
      router.push('/404')
    }
  }, [loadingProject, projectData, router])

  const shouldSelectView = e => {
    if (settingsViewRef?.current?.hasChanged() || projectViewRef?.current?.hasChanged()) {
      const isConfirmed = confirm(cms.alert)
      if (!isConfirmed) {
        setView(view)
      } else {
        setView(e.target.value)
      }
    } else {
      setView(e.target.value)
    }
  }

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/projects' }}
      footer={{ className: 'bg-white lg:bg-lilac-100' }}
      noindex={true}
      className="bg-white text-lilac-800 lg:bg-lilac-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-lilac-100"
        headerColor="bg-lilac-300 lg:bg-lilac-100">
        <FramedGridCard.Header className="bg-lilac-300">
          <div className="flex flex-col justify-between lg:items-center lg:flex-row">
            <Text as="h1" variant="textLg" className="mb-4 hyphens-auto lg:mb-0">
              {projectData?.projects_by_pk?.title}
            </Text>
            <Select
              aria-label={cms.aria.select}
              value={view}
              onChange={shouldSelectView}
              color="lilac"
              className="flex-shrink-0 w-56 mb-2 lg:ml-12 lg:mb-0">
              {projectEditData.nav.map((nav, index) => (
                <option key={`pn-${index}`}>{nav}</option>
              ))}
            </Select>
          </div>
        </FramedGridCard.Header>
        {loadingProject || loadingUser || !projectData ? (
          <SkeletonView />
        ) : view === projectEditData.nav[0] ? (
          <ProjectView ref={projectViewRef} user={user} project={projectData.projects_by_pk} />
        ) : view === projectEditData.nav[1] ? (
          <RequestsView project={projectData.projects_by_pk} />
        ) : (
          <SettingsView ref={settingsViewRef} project={projectData.projects_by_pk} />
        )}
      </FramedGridCard>
    </Page>
  )
}

ProjectEdit.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
}

export default withAuth(ProjectEdit, { isAuthRequired: true })
