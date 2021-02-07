import { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'

import { useAuth } from '~/utils/services/auth.service'
import { Button, Text } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import useProjectsService from '~/utils/services/projects.service'
import { VisibilityField, ContactField } from '~/containers/user/ProjectForm'
import { editProjectsViewsData as cms } from '~/assets/data'

const SettingsView = forwardRef(({ project }, ref) => {
  const { user } = useAuth()
  const { deleteProject, serializeProjectSettings, updateProject, deleteLoading, updateLoading } = useProjectsService()
  const router = useRouter()

  const handleSubmit = newValues => {
    if (!formik.dirty) {
      return
    }
    const settings = serializeProjectSettings(user, newValues)
    updateProject(project.id, settings)
    formik.resetForm(newValues)
  }

  const formik = useFormik({
    initialValues: {
      visibility: project.visibility,
      contact: project.contact === user.data.private.email,
    },
    onSubmit: handleSubmit,
    enableReinitialize: true,
  })

  useImperativeHandle(ref, () => ({
    hasChanged: () => formik.dirty,
  }))

  const handleDelete = async () => {
    const isDeleted = await deleteProject(project.id)
    if (isDeleted) {
      router.push('/user/projects')
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
          <VisibilityField formik={formik} />
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
          <ContactField formik={formik} user={user} className="mt-4 lg:mt-0" />
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
          <div className="mt-5 text-center sm:text-left">
            <Button type="submit" className="bg-lilac-200" color="lilac" disabled={updateLoading}>
              {cms.settingsView.save}
            </Button>
          </div>
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2 text-warning-700">
          <Text className="mt-8 mb-2 text-left">{cms.settingsView.delete.title}</Text>
          <Text variant="textSm" className="text-left">
            {cms.settingsView.alert}
          </Text>
          <div className="mt-8 text-center sm:text-left">
            <Button variant="outline" color="warning" onClick={handleDelete} disabled={deleteLoading}>
              {cms.settingsView.delete.action}
            </Button>
          </div>
        </FramedGridCard.Body.Col>
      </FramedGridCard.Body>
    </form>
  )
})

SettingsView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default SettingsView
