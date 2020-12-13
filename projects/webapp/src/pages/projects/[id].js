import { Fragment, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MapPin, Calendar, Send, Share2 } from 'react-feather'
import { isValid } from 'date-fns'
import classnames from 'classnames'

import { Text, Button, Link } from 'ui-library/stories/atoms'
import { InfoCard } from 'ui-library/stories/molecules'
import { FramedGridCard } from 'ui-library/stories/templates'
import { serializeJSX } from 'ui-library/services/RichTextEditor.service'
import { useToasts } from 'ui-library/services/Toasts.service'
import auth0 from '~/utils/libs/auth0'
import apollo from '~/utils/services/apollo.service'
import { GET_PROJECT } from '~/utils/hasura/queries/projects.query'
import { initializeApollo } from '~/utils/libs/apolloClient'
import { NZ_EMAIL } from '~/utils/enums'
import { projectData as cms } from '~/assets/data'
import { Page, RequestCard } from '~/components'
import { RequestDialog, ContactDialog, Banner } from '~/containers/projects'

const Project = ({ id, user }) => {
  const [currentRequest, setCurrentRequest] = useState()
  const [showRequestDialog, setShowRequestDialog] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const { data } = apollo.useGetProject(id)
  const { notify } = useToasts()

  const period = useMemo(() => {
    const startDate = new Date(data.projects_by_pk.period.from)
    const endDate = new Date(data.projects_by_pk.period.to)
    return isValid(startDate) && isValid(endDate)
      ? `${startDate.toLocaleDateString('de-DE')} - ${endDate.toLocaleDateString('de-DE')}`
      : cms.header.period
  }, [data])

  const location = useMemo(() => {
    const osm = data?.projects_by_pk?.location?.data?.osm
    if (osm) {
      const city = data?.projects_by_pk?.location?.data?.city
      const link = `https://www.openstreetmap.org/${osm.type}/${osm.id}`
      return { city, link }
    } else {
      return { city: cms.header.location, link: null }
    }
  }, [data])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data?.projects_by_pk?.title,
          url: window.location.href,
        })
      } catch (error) {
        notify({ type: 'error', message: cms.notify.error })
      }
    } else {
      const dummy = document.createElement('input')
      const url = window.location.href
      document.body.appendChild(dummy)
      dummy.value = url
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      notify({ type: 'success', message: cms.notify.success })
    }
  }

  useEffect(() => {
    if (currentRequest) {
      setShowRequestDialog(true)
    }
  }, [currentRequest])

  const closeRequest = () => {
    setShowRequestDialog(false)
    setCurrentRequest(null)
  }

  const handleContact = () => {
    if (data.projects_by_pk.contact === NZ_EMAIL) {
      setShowContactDialog(true)
      closeRequest()
    } else {
      window.location.href = `mailto:${data.projects_by_pk.contact}?subject=${cms.email.subject}`
    }
  }

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/profile' }}
      title={data.projects_by_pk.title}
      description={data.projects_by_pk.goal}
      footer={{ className: 'bg-white lg:bg-lilac-100' }}
      noindex={true}
      className="text-lilac-800 bg-lilac-100">
      <Banner project={data.projects_by_pk} user={user} />
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-lilac-100"
        headerColor="bg-lilac-300 lg:bg-lilac-100">
        <FramedGridCard.Header className="bg-lilac-300">
          <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between">
            <div className="lg:pr-12 lg:w-9/12 hyphens-auto">
              <Text as="h1" variant="textLg" className="mb-2">
                {data?.projects_by_pk?.title}
              </Text>
              <Text variant="textSm" className="max-w-xl">
                {data?.projects_by_pk?.goal}
              </Text>
              <div className="flex flex-col w-full mt-4 lg:mt-3 sm:flex-row sm:items-center">
                <div className="flex items-center sm:mr-8">
                  <MapPin size={20} className="mr-2" />
                  {location?.link ? (
                    <Link
                      color="lilac"
                      href={location.link}
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
                <div className="flex items-center mt-2 sm:mt-0">
                  <Calendar size={20} className="mr-2" />
                  <Text variant="textSm">{period}</Text>
                </div>
              </div>
            </div>
            <div className="flex mt-6 mb-2.5 lg:mt-5 lg:w-3/12 lg:mt-2 lg:items-end lg:flex-col lg:mb-0">
              <Button
                onClick={handleContact}
                iconLeft={<Send size={21} className="mt-px mr-2 -ml-1" />}
                color="lilac"
                size="small"
                className="mr-5 lg:mr-0 lg:mb-3">
                {cms.header.actions.contact}
              </Button>
              <Button
                onClick={handleShare}
                size="small"
                iconLeft={<Share2 size={21} className="mt-px mr-2 -ml-1" />}
                color="lilac">
                {cms.header.actions.share}
              </Button>
            </div>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2 lg:pr-4">
            <div className="mt-10 lg:mt-0">
              <Text className="mb-3" variant="textLg">
                {cms.body.what}
              </Text>
              <div className="text-lg">
                {data?.projects_by_pk?.descriptionTemplate.map((node, idx) => (
                  <Fragment key={`rq-${idx}`}>{serializeJSX(node, 'lilac')}</Fragment>
                ))}
              </div>
            </div>
            {data?.projects_by_pk?.team && (
              <div className="mt-10">
                <Text className="mb-3" variant="textLg">
                  {cms.body.who}
                </Text>
                <Text variant="textSm">{data.projects_by_pk.team}</Text>
              </div>
            )}
            {data?.projects_by_pk?.motto && (
              <div className="mt-10">
                <Text className="mb-3" variant="textLg">
                  {cms.body.how}
                </Text>
                <Text variant="textSm">{data.projects_by_pk.motto}</Text>
              </div>
            )}
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col
            variant="twoCols"
            className="row-start-1 100 lg:row-start-auto lg:pl-4 text-stone-800">
            <Text className="mb-4" variant="textLg">
              {cms.body.requests}
            </Text>
            {data?.projects_by_pk?.requests?.length > 0 ? (
              <>
                {data.projects_by_pk.requests.map((request, index) => (
                  <RequestCard
                    key={`requests-${index}`}
                    variant="view"
                    request={request}
                    className={classnames({ 'mt-4 lg:mt-3': index > 0 })}
                    onClick={request => setCurrentRequest(request)}
                  />
                ))}
              </>
            ) : (
              <InfoCard className="mt-2">{cms.body.searchings.info}</InfoCard>
            )}
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol" className="mt-8">
            <Text variant="textSm">
              {cms.body.createdAt} {new Date(data?.projects_by_pk?.created_at).toLocaleDateString('de-DE')}
            </Text>
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
      <RequestDialog
        isOpen={showRequestDialog}
        onDismiss={closeRequest}
        onContact={handleContact}
        request={currentRequest}
      />
      <ContactDialog
        isOpen={showContactDialog}
        onDismiss={() => setShowContactDialog(false)}
        project={data?.projects_by_pk}
      />
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const apolloClient = initializeApollo(null, ctx)
  try {
    const res = await apolloClient.query({
      query: GET_PROJECT,
      variables: { id },
    })
    if (!res?.data?.projects_by_pk) {
      return {
        notFound: true,
      }
    } else {
      let user = 'anonymous'
      try {
        const session = await auth0.getSession(ctx.req)
        user = session.user.sub
      } catch (error) {
        console.log(error)
      }
      return {
        props: {
          id,
          user: user,
          initialApolloState: apolloClient.cache.extract(),
        },
      }
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

Project.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
}

export default Project
