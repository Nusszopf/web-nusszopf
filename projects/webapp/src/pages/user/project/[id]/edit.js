import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { Text, Select } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { useEntireUser } from '~/utils/services/auth.service'
import apollo from '~/utils/services/apollo.service'
import { Page } from '~/components'
import { ProjectView, RequestsView, SettingsView, SkeletonView } from '~/containers'

const projectEditData = {
  nav: ['Beschreibung', 'Gesuche', 'Einstellungen'],
}

const ProjectEdit = ({ id }) => {
  const router = useRouter()
  const user = useEntireUser()
  const [view, setView] = useState(projectEditData.nav[0])
  const { data, loading } = apollo.useGetProject(id)

  useEffect(() => {
    if (!loading && !data) {
      router.push('/404')
    }
  }, [loading, data, router])

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/profile' }}
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
              {data?.projects_by_pk?.title}
            </Text>
            <Select
              onChange={e => setView(e.target.value)}
              color="lilac"
              className="flex-shrink-0 w-56 mb-2 lg:ml-12 lg:mb-0">
              {projectEditData.nav.map((nav, index) => (
                <option key={`pn-${index}`}>{nav}</option>
              ))}
            </Select>
          </div>
        </FramedGridCard.Header>
        {loading || !data ? (
          <SkeletonView />
        ) : view === projectEditData.nav[0] ? (
          <ProjectView user={user} project={data?.projects_by_pk} />
        ) : view === projectEditData.nav[1] ? (
          <RequestsView project={data?.projects_by_pk} />
        ) : (
          <SettingsView user={user} project={data?.projects_by_pk} />
        )}
      </FramedGridCard>
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  return {
    props: {
      id,
    },
  }
}

ProjectEdit.propTypes = {
  id: PropTypes.string,
}

export default ProjectEdit
