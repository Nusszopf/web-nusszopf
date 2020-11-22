import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'

import { Button, Text } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import useProjectsService from '~/utils/services/projects.service'
import { VisibilityField, ContactField } from '../ProjectForm'

const SettingsView = ({ user, project }) => {
  const { deleteProject, serializeProjectSettings, updateProject, deleteLoading, updateLoading } = useProjectsService()
  const router = useRouter()

  const handleSubmit = values => {
    const settings = serializeProjectSettings(user, values)
    updateProject(project.id, settings)
  }

  const handleDelete = async () => {
    const isDeleted = await deleteProject(project.id)
    if (isDeleted) {
      router.push('/user/profile')
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
                <Button type="submit" color="lilac800" disabled={updateLoading}>
                  Speichern
                </Button>
              </div>
            </FramedGridCard.Body.Col>
            <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4 text-warning-400">
              <Text className="mb-2">Projekt löschen</Text>
              <Text className="mb-6" variant="textSm">
                Nach dem Löschen können die Daten nicht wieder hergestellt werden.
              </Text>
              <Button variant="outline" color="warning" onClick={handleDelete} disabled={deleteLoading}>
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
