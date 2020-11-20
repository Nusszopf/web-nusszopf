import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'

import { useToasts } from 'ui-library/services/Toasts.service'
import { Button, Text } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '~/utils/services/apollo.service'
import { VisibilityField, ContactField } from '../ProjectForm'

const SettingsView = ({ user, project }) => {
  const { notify } = useToasts()
  const [deleteProject] = apollo.useDeleteProject(project.id)
  const router = useRouter()

  const handleSubmit = values => {
    console.log(values)
  }

  const handleDelete = async () => {
    const hasConfirmed = confirm('Möchtest Du dein Projekt wirklich löschen?')
    if (hasConfirmed) {
      notify({
        type: 'loading',
        message: 'Dein Projekt wird gelöscht.',
      })
      try {
        await deleteProject()
        router.push('/user/profile')
        notify({
          type: 'success',
          message: 'Dein Projekt wurde gelöscht.',
        })
      } catch (error) {
        notify({
          type: 'error',
          message: 'Sorry, da lief was schief...',
        })
      }
    }
  }

  return (
    <Formik
      initialValues={{
        visibility: project.visibility,
        contact: project.contact === user.data.email,
      }}
      onSubmit={handleSubmit}>
      {formik => (
        <Form>
          <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
            <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
              <VisibilityField formik={formik} />
              <ContactField formik={formik} user={user} className="mt-6" />
              <div className="mt-12">
                <Button type="submit" color="lilac800">
                  Speichern
                </Button>
              </div>
            </FramedGridCard.Body.Col>
            <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4 text-warning">
              <Text className="mb-2">Projekt löschen</Text>
              <Text className="mb-6" variant="textSm">
                Nach dem Löschen können die Daten nicht wieder hergestellt werden.
              </Text>
              <Button variant="outline" color="warning" onClick={handleDelete}>
                Projekt löschen
              </Button>
            </FramedGridCard.Body.Col>
          </FramedGridCard.Body>
        </Form>
      )}
    </Formik>
  )
}

SettingsView.propTypes = {
  user: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
}

export default SettingsView
