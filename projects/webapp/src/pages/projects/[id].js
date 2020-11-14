import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { MapPin, Calendar, Send, Share2, ExternalLink } from 'react-feather'
import { isValid } from 'date-fns'

import { Text, Button, Link } from 'ui-library/stories/atoms'
import { useRichtTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '../../utils/services/apollo.service'
import { Page } from '../../containers'
import { GET_PROJECT } from '../../utils/hasura/queries/projects.query'
import { initializeApollo } from '../../utils/libs/apolloClient'

const Project = ({ id }) => {
  const { data } = apollo.useGetProject(id)
  const { serialize } = useRichtTextEditor()
  const period = useMemo(() => {
    const startDate = new Date(data.projects_by_pk.period.from)
    const endDate = new Date(data.projects_by_pk.period.to)
    return isValid(startDate) && isValid(endDate)
      ? `${startDate.toLocaleDateString('de-DE')} - ${endDate.toLocaleDateString('de-DE')}`
      : 'flexibler Zeitraum'
  }, [data])

  const location = useMemo(() => {
    const osm = data?.projects_by_pk?.location?.data?.osm
    if (osm) {
      const city = data?.projects_by_pk?.location?.data?.city
      const link = `https://www.openstreetmap.org/${osm.type}/${osm.id}`
      return { city, link }
    } else {
      return { city: 'unabhängig von Ort', link: null }
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
                {location?.link ? (
                  <Link
                    href={location.link}
                    color="lilac800Transparent"
                    textVariant="textSm"
                    title="Zu OpenStreetMap"
                    ariaLabel="Zu OpenStreetMap">
                    <span className="inline-flex items-center">
                      {location.city}
                      <ExternalLink size={14} className="ml-1" />
                    </span>
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
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div>
              <Text className="mb-2">Um was geht es?</Text>
              <div className="text-lg">{data?.projects_by_pk?.descriptionTemplate.map(node => serialize(node))}</div>
            </div>
            {data?.projects_by_pk?.team && (
              <div className="mt-8">
                <Text className="mb-2">Wer steckt dahinter?</Text>
                <Text variant="textSm">{data.projects_by_pk.team}</Text>
              </div>
            )}
            {data?.projects_by_pk?.motto && (
              <div className="mt-8">
                <Text variant="textSmMedium" className="italic">
                  Motto: {data.projects_by_pk.motto}
                </Text>
              </div>
            )}
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols" className="row-start-1 100 lg:row-start-auto lg:ml-16">
            <Text>Aktuelle Gesuche</Text>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol" className="mt-10">
            <Text variant="textSm">
              Erstellt am {new Date(data?.projects_by_pk?.created_at).toLocaleDateString('de-DE')}
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
