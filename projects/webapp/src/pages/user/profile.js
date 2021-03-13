import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, mixed } from 'yup'

import { Text, Link, Checkbox, Route, Button, Skeleton } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { InfoCard, Avatar } from 'ui-library/stories/molecules'
import { useToasts } from 'ui-library/services/Toasts.service'
import apollo from '~/utils/services/apollo.service'
import { useAuth } from '~/utils/services/auth.service'
import { withAuth } from '~/utils/hoc'
import { Page } from '~/components'
import { AvatarDialog } from '~/containers'
import { profileData as cms } from '~/assets/data'

const Profile = ({ user, loading }) => {
  const { notify } = useToasts()
  const { logout } = useAuth()
  const [showAvatarDialog, setShowAvatarDialog] = useState(false)
  const [deleteUser, { loading: loadingDeleteUser }] = apollo.useDeleteUser()
  const [addLead, { loading: loadingAddLead }] = apollo.useAddLead()
  const [deleteLead, { loading: loadingDeleteLead }] = apollo.useDeleteLead()
  const [updateLead, { loading: loadingUpdateLead }] = apollo.useUpdateLead(user?.data?.private?.id)

  const handleSubscribe = async ({ privacy }) => {
    notify({ type: 'loading', message: cms.newsletter.subscribe.notify.loading })
    try {
      const res = await addLead({
        variables: {
          email: user.data.private.email,
          name: user.data.name,
          privacy,
        },
      })
      await updateLead({ variables: { id: res.data.insert_leads_one.id } })
      notify({ type: 'success', message: cms.newsletter.subscribe.notify.success })
    } catch (error) {
      notify({ type: 'error', message: cms.newsletter.subscribe.notify.error })
    }
  }

  const handleUnsubscribe = async () => {
    const isConfirmed = confirm(cms.newsletter.unsubscribe.confirm)
    if (isConfirmed) {
      notify({ type: 'loading', message: cms.newsletter.unsubscribe.notify.loading })
      try {
        await deleteLead({
          variables: { email: user.data.private.email },
        })
        notify({ type: 'success', message: cms.newsletter.unsubscribe.notify.success })
      } catch (error) {
        notify({ type: 'error', message: cms.newsletter.unsubscribe.notify.error })
      }
    }
  }

  const handleDelete = async () => {
    const isConfirmed = confirm(cms.delete.confirm)
    if (isConfirmed) {
      notify({ type: 'loading', message: cms.delete.notify.loading })
      try {
        await deleteUser({
          variables: { id: user.data.private.id },
        })
        logout()
        notify({ type: 'success', message: cms.delete.notify.success })
      } catch (error) {
        notify({ type: 'error', message: cms.delete.notify.error })
      }
    }
  }

  return (
    <Page
      navHeader={{ visible: true }}
      footer={{ className: 'bg-steel-100' }}
      noindex={true}
      className="text-steel-700 bg-steel-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-steel-100"
        headerColor="bg-steel-200 lg:bg-steel-100">
        <FramedGridCard.Header className="bg-steel-200">
          <div id="header" className="flex flex-col sm:flex-row sm:justify-between sm:flex-row-reverse sm:items-center">
            <Text as="h1" variant="textLg" className="-mt-2 sm:ml-6 sm:mt-0">
              {cms.title}
            </Text>
            <Avatar
              user={user}
              loading={loading}
              variant="settings"
              onEdit={() => setShowAvatarDialog(true)}
              className="mt-4 sm:mt-0"
            />
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body className="bg-white">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div id="newsletter">
              <Text variant="textMd" className="mb-2">
                {cms.newsletter.title}
              </Text>
              {loading ? (
                <>
                  <Skeleton className="h-4 mt-4 bg-steel-400" />
                  <Skeleton className="h-4 mt-3 bg-steel-400" />
                  <Skeleton full={false} className="w-1/2 h-4 mt-3 bg-steel-400" />
                </>
              ) : !user.data.lead?.hasConfirmed ? (
                <Formik
                  initialValues={{ privacy: false }}
                  onSubmit={handleSubscribe}
                  validationSchema={object({
                    privacy: mixed().oneOf([true], cms.newsletter.subscribe.field.validation),
                  })}>
                  {formikProps => (
                    <Form>
                      <Text variant="textSm" className="mb-2">
                        {cms.newsletter.subscribe.description}
                      </Text>
                      <Field
                        as={Checkbox}
                        name="privacy"
                        aria-label={cms.newsletter.subscribe.field.aria}
                        checked={formikProps.values.privacy}
                        label={
                          <>
                            {cms.newsletter.subscribe.field.label[0]}{' '}
                            <Route
                              className="italic"
                              href={cms.newsletter.subscribe.field.label[1].href}
                              title={cms.newsletter.subscribe.field.label[1].meta}
                              ariaLabel={cms.newsletter.subscribe.field.label[1].meta}>
                              {cms.newsletter.subscribe.field.label[1].text}
                            </Route>{' '}
                            {cms.newsletter.subscribe.field.label[2]}
                          </>
                        }
                      />
                      <ErrorMessage
                        name="privacy"
                        variant="textSm"
                        className="mt-1 mb-3 ml-6 italic text-warning-700"
                        component={Text}
                      />
                      <Button
                        type="submit"
                        className="block mx-auto mt-6 sm:mt-4 bg-steel-100 sm:ml-0"
                        disabled={loadingUpdateLead || loadingAddLead}>
                        {cms.newsletter.subscribe.action}
                      </Button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <>
                  <Text variant="textSm" className="mb-2">
                    {cms.newsletter.unsubscribe.description}
                  </Text>
                  <Button
                    onClick={handleUnsubscribe}
                    className="block mx-auto mt-6 sm:mt-4 bg-steel-100 sm:ml-0"
                    disabled={loadingDeleteLead}>
                    {cms.newsletter.unsubscribe.action}
                  </Button>
                </>
              )}
            </div>
            <div id="sponsoring" className="mt-12 text-center sm:text-left">
              <Text variant="textMd" className="mb-2 text-left">
                {cms.sponsoring.title}
              </Text>
              <Text variant="textSm" className="text-left">
                {cms.sponsoring.description}
              </Text>
              <Link
                variant="button"
                className="block mt-6 sm:mt-4 bg-steel-100"
                title={cms.sponsoring.action.meta}
                ariaLabel={cms.sponsoring.action.meta}
                href={cms.sponsoring.action.href}>
                {cms.sponsoring.action.text}
              </Link>
            </div>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols">
            <div id="delete" className="mt-10 text-warning-700 lg:ml-16 lg:mt-0">
              <Text variant="textMd" className="mb-2">
                {cms.delete.title}
              </Text>
              <Text variant="textSm">{cms.delete.description}</Text>
              <Button
                onClick={handleDelete}
                variant="outline"
                color="warning"
                className="block mx-auto mt-6 sm:mt-4 sm:ml-0"
                disabled={loadingDeleteUser}>
                {cms.delete.action}
              </Button>
            </div>
            <InfoCard className="text-gray-700 bg-gray-200 mt-14 lg:ml-16">
              {cms.info.contact.text}
              {': '}
              <Link
                color="livid"
                href={cms.info.contact.link.href}
                type="file"
                textVariant="textSm"
                title={cms.info.contact.link.meta}
                ariaLabel={cms.info.contact.link.meta}>
                {cms.info.contact.link.text}
              </Link>
            </InfoCard>
            <InfoCard className="mt-5 text-gray-700 bg-gray-200 lg:ml-16">
              {cms.info.support.text[0]}{' '}
              <Link
                color="livid"
                href={cms.info.support.link.href}
                type="mail"
                textVariant="textSm"
                title={cms.info.support.link.meta}
                ariaLabel={cms.info.support.link.meta}>
                {cms.info.support.link.text}
              </Link>{' '}
              {cms.info.support.text[1]}
            </InfoCard>
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
      <AvatarDialog isOpen={showAvatarDialog} onDismiss={() => setShowAvatarDialog(false)} user={user} />
    </Page>
  )
}

Profile.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
}

export default withAuth(Profile, { isAuthRequired: true })
