import { useState } from 'react'
import PropTypes from 'prop-types'
import { Plus } from 'react-feather'
import classnames from 'classnames'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Button, Text } from 'ui-library/stories/atoms'
import { EditRequestDialog } from '~/containers'
import { RequestCard } from '~/components'
import { InfoCard } from 'ui-library/stories/molecules'
import useProjectsService from '~/utils/services/projects.service'

const RequestsView = ({ project }) => {
  const { deleteRequest, addRequest, updateRequest } = useProjectsService({ project })
  const [currentRequest, setCurrentRequest] = useState()
  const [showDialog, setShowDialog] = useState(false)

  const openDialog = () => setShowDialog(true)

  const closeDialog = () => {
    setCurrentRequest(null)
    setShowDialog(false)
  }

  const onEdit = _request => {
    let { descriptionTemplate, ...request } = _request
    request.description = descriptionTemplate
    setCurrentRequest(request)
    openDialog()
  }

  const handleDelete = async request => {
    await deleteRequest(request.id)
    closeDialog()
  }

  const handleCreate = async request => {
    await addRequest(project.id, request)
    closeDialog()
  }

  const handleUpdate = async request => {
    await updateRequest(request)
    closeDialog()
  }

  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <Button
          onClick={openDialog}
          color="stone"
          className="bg-stone-300"
          iconLeft={<Plus className="mr-2 -ml-2" />}
          size="large">
          Neues Gesuch erstellen
        </Button>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <Text className="mb-2">Aktuelle Gesuche</Text>
        {project?.requests?.length > 0 ? (
          <>
            {project?.requests?.map((request, index) => (
              <RequestCard
                key={`r-${index}`}
                variant="edit"
                request={request}
                onEdit={onEdit}
                onDelete={handleDelete}
                className={classnames({ 'mb-2': index < project.requests.length - 1 })}
              />
            ))}
          </>
        ) : (
          <InfoCard className="bg-livid-200 text-livid-700">Alles zopfig! Derzeit gibt es keine Gesuche.</InfoCard>
        )}
      </FramedGridCard.Body.Col>
      <EditRequestDialog
        isOpen={showDialog}
        onDismiss={closeDialog}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        initialValues={currentRequest}
      />
    </FramedGridCard.Body>
  )
}

RequestsView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default RequestsView
