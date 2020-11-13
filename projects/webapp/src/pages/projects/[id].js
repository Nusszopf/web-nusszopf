import { useState } from 'react'
import PropTypes from 'prop-types'
import { MapPin, Calendar, Send, Share2 } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '../../utils/services/apollo.service'
import { Page } from '../../containers'
import { GET_PROJECT } from '../../utils/hasura/queries/projects.query'
import { initializeApollo } from '../../utils/libs/apolloClient'

// load server side

const Project = ({ id }) => {
  const { data } = apollo.useGetProject(id)
  const [project, setProject] = useState()

  return (
    <Page
      navHeader={{ visible: true, goBackUri: 'back' }}
      showFooter={false}
      noindex={true}
      className="text-lilac-800 bg-lilac-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-lilac-100"
        headerColor="bg-lilac-400 lg:bg-lilac-100">
        <FramedGridCard.Header className="bg-lilac-400">
          <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between lg:items-center">
            <div className="lg:pr-12 lg:w-7/12">
              <Text as="h1" variant="textLg" className="mb-2">
                {data?.projects_by_pk?.title}
              </Text>
              <Text variant="textSm" className="hyphens-auto">
                {data?.projects_by_pk?.goal}
              </Text>
            </div>
            <div className="flex flex-row items-center order-last mt-5 mb-2 lg:w-5/12 lg:order-none lg:mt-10 lg:mb-0 lg:justify-end">
              <Button
                iconLeft={<Send className="mt-px mr-2 -ml-1" />}
                variant="outline"
                color="lilac800"
                className="mr-5">
                Kontaktieren
              </Button>
              <Button iconLeft={<Share2 className="mt-px mr-2 -ml-1" />} variant="outline" color="lilac800">
                Teilen
              </Button>
            </div>
            <div className="flex flex-col w-full mt-3 sm:flex-row sm:items-center">
              <div className="flex items-center sm:mr-8">
                <MapPin size={20} className="mr-2" />
                <Text variant="textSm">{project?.location ? 'Ort' : 'unabhängig von Ort'}</Text>
              </div>
              <div className="flex items-center mt-1 sm:mt-0">
                <Calendar size={20} className="mr-2" />
                <Text variant="textSm">{project?.time ? 'Zeit' : 'keine Zeitbegrenzung'}</Text>
              </div>
            </div>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div>
              <Text className="mb-2">Um was geht es?</Text>
              <Text variant="textSm">{data?.projects_by_pk?.description}</Text>
            </div>
            <div className="mt-8">
              <Text className="mb-2">Wer steckt dahinter?</Text>
              <Text variant="textSm">{data?.projects_by_pk?.team}</Text>
            </div>
            <div className="mt-8">
              <Text variant="textSmMedium" className="italic">
                Motto: {data?.projects_by_pk?.motto}
              </Text>
            </div>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols" className="row-start-1 100 lg:row-start-auto lg:ml-16">
            <Text>Aktuelle Gesuche</Text>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol" className="mt-10">
            <Text variant="textSm">Erstellt am {new Date(data?.projects_by_pk?.created_at).toLocaleDateString()}</Text>
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const apolloClient = initializeApollo()
  const res = await apolloClient.query({
    query: GET_PROJECT,
    variables: { id },
  })
  // next.js v10
  // if (res?.data?.projects_by_pk) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

Project.propTypes = {
  id: PropTypes.string,
}

export default Project
