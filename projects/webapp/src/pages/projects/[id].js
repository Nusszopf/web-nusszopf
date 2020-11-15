import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { MapPin, Calendar, Send, Share2 } from 'react-feather'
import { isValid } from 'date-fns'

import { Text, Button, Link } from 'ui-library/stories/atoms'
import { InfoCard } from 'ui-library/stories/molecules'
import { serializeJSX } from 'ui-library/services/RichTextEditor.service'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '../../utils/services/apollo.service'
import { Page } from '../../containers'
import { GET_PROJECT } from '../../utils/hasura/queries/projects.query'
import { initializeApollo } from '../../utils/libs/apolloClient'
import { projectData } from '../../assets/data'

const Project = ({ id }) => {
  const { data } = apollo.useGetProject(id)
  const period = useMemo(() => {
    const startDate = new Date(data.projects_by_pk.period.from)
    const endDate = new Date(data.projects_by_pk.period.to)
    return isValid(startDate) && isValid(endDate)
      ? `${startDate.toLocaleDateString('de-DE')} - ${endDate.toLocaleDateString('de-DE')}`
      : projectData.header.period
  }, [data])

  const location = useMemo(() => {
    const osm = data?.projects_by_pk?.location?.data?.osm
    if (osm) {
      const city = data?.projects_by_pk?.location?.data?.city
      const link = `https://www.openstreetmap.org/${osm.type}/${osm.id}`
      return { city, link }
    } else {
      return { city: projectData.header.location, link: null }
    }
  }, [data])

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
          <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between">
            <div className="lg:pr-12 lg:w-9/12 hyphens-auto">
              <Text as="h1" variant="textLg" className="mb-2">
                {data?.projects_by_pk?.title}
              </Text>
              <Text variant="textSm" className="max-w-xl">
                {data?.projects_by_pk?.goal}
              </Text>
              <div className="flex flex-col w-full mt-3 sm:flex-row sm:items-center">
                <div className="flex items-center sm:mr-8">
                  <MapPin size={20} className="mr-2" />
                  {location?.link ? (
                    <Link
                      href={location.link}
                      color="lilac800Transparent"
                      textVariant="textSm"
                      title="Zu OpenStreetMap"
                      ariaLabel="Zu OpenStreetMap">
                      {location.city}
                    </Link>
                  ) : (
                    <>
                      <Text variant="textSm">{location?.city}</Text>
                    </>
                  )}
                </div>
                <div className="flex items-center mt-1 sm:mt-0">
                  <Calendar size={20} className="mr-2" />
                  <Text variant="textSm">{period}</Text>
                </div>
              </div>
            </div>
            <div className="flex mt-5 mb-2 lg:w-3/12 lg:mt-2 lg:items-end lg:flex-col lg:mb-0">
              <Button
                iconLeft={<Send size={21} className="mt-px mr-2 -ml-1" />}
                variant="outline"
                size="small"
                color="lilac800"
                className="mr-5 lg:mr-0 lg:mb-2">
                {projectData.header.actions.contact}
              </Button>
              <Button
                size="small"
                iconLeft={<Share2 size={21} className="mt-px mr-2 -ml-1" />}
                variant="outline"
                color="lilac800">
                {projectData.header.actions.share}
              </Button>
            </div>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div>
              <Text className="mb-2">{projectData.body.what}</Text>
              <div className="text-lg">{data?.projects_by_pk?.descriptionTemplate.map(node => serializeJSX(node))}</div>
            </div>
            {data?.projects_by_pk?.team && (
              <div className="mt-8">
                <Text className="mb-2">{projectData.body.who}</Text>
                <Text variant="textSm">{data.projects_by_pk.team}</Text>
              </div>
            )}
            {data?.projects_by_pk?.motto && (
              <div className="mt-8">
                <Text className="mb-2">{projectData.body.how}</Text>
                <Text variant="textSm">{data.projects_by_pk.motto}</Text>
              </div>
            )}
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols" className="row-start-1 100 lg:row-start-auto lg:ml-16">
            <Text>Aktuelle Gesuche</Text>
            <InfoCard className="mt-2 text-lilac-800 bg-lilac-400">{projectData.body.searchings.info}</InfoCard>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol" className="mt-10">
            <Text variant="textSm">
              {projectData.body.createdAt} {new Date(data?.projects_by_pk?.created_at).toLocaleDateString('de-DE')}
            </Text>
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
