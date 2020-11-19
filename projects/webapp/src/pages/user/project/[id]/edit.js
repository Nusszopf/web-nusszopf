import { useState } from 'react'
import PropTypes from 'prop-types'

import { Text, Select } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '~/utils/services/apollo.service'
import { Page } from '~/components'

const ProjectEdit = ({ id }) => {
  const [view, setView] = useState('Beschreibung')
  const { data, loading } = apollo.useGetProject(id)

  console.log(view)

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/profile' }}
      showFooter={false}
      noindex={true}
      className="text-lilac-800 bg-lilac-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-lilac-100"
        headerColor="bg-lilac-400 lg:bg-lilac-100">
        <FramedGridCard.Header className="bg-lilac-400">
          <div className="flex flex-col justify-between lg:items-center lg:flex-row">
            <Text as="h1" variant="textLg" className="mb-4 lg:mb-0 hyphens-auto">
              {data?.projects_by_pk?.title}
            </Text>
            <Select onChange={e => setView(e.target.value)} className="flex-shrink-0 w-56 mb-2 lg:ml-12 lg:mb-0">
              <option>Beschreibung</option>
              <option>Gesuche</option>
              <option>Einstellungen</option>
            </Select>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            body:col-1
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
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
