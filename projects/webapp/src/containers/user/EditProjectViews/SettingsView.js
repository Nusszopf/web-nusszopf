import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'

import { Button, Text } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { VisibilityField, ContactField } from '../ProjectForm'

const SettingsView = ({ user, project }) => {
  const handleSubmit = values => {
    console.log(values)
  }

  const deleteProject = () => {
    const hasConfirmed = confirm('Möchtest Du dein Projekt wirklich löschen?')
    if (hasConfirmed) {
      console.log(hasConfirmed)
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
              <Button variant="outline" color="warning" onClick={deleteProject}>
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
