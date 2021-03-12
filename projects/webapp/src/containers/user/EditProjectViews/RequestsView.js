import { useState } from 'react'
import PropTypes from 'prop-types'
import { PlusCircle } from 'react-feather'
import classnames from 'classnames'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Button, Text } from 'ui-library/stories/atoms'
import { EditRequestDialog } from '~/containers'
import { RequestCard } from '~/components'
import { InfoCard } from 'ui-library/stories/molecules'
import useProjectsService from '~/utils/services/projects.service'
import { editProjectsViewsData as cms } from '~/assets/data'

const RequestsView = ({ project }) => {
  const { deleteRequest, addRequest, updateRequest } = useProjectsService({ project })
  const [currentRequest, setCurrentRequest] = useState()
  const [showDialog, setShowDialog] = useState(false)

  const openDialog = () => setShowDialog(true)

  const closeDialog = () => {
    setShowDialog(false)
    setCurrentRequest(null)
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
    <>
      <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
        <FramedGridCard.Body.Col variant="twoCols" className="text-center lg:text-left lg:pr-4 lg:col-start-2">
          <Text className="mb-2 text-left">{cms.requestsView.titleIntro}</Text>
          <Text variant="textSm" className="text-left">
            {cms.requestsView.intro}
          </Text>
          <Button
            onClick={openDialog}
            color="stone"
            className="mt-8 bg-stone-300"
            iconLeft={<PlusCircle className="mr-2 -ml-2" />}
            size="large">
            {cms.requestsView.create}
          </Button>
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
          <Text className="mt-8 mb-4 lg:mt-0">{cms.requestsView.titleCreated}</Text>
          {project.requests?.length > 0 ? (
            <>
              {project.requests.map((request, index) => (
                <RequestCard
                  key={`r-${index}`}
                  variant="edit"
                  request={request}
                  onEdit={onEdit}
                  onDelete={handleDelete}
                  className={classnames({ 'mb-3': index < project.requests.length - 1 })}
                />
              ))}
            </>
          ) : (
            <InfoCard className="bg-livid-200 text-livid-700">{cms.requestsView.info}</InfoCard>
          )}
        </FramedGridCard.Body.Col>
      </FramedGridCard.Body>
      <EditRequestDialog
        isOpen={showDialog}
        onDismiss={closeDialog}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        initialValues={currentRequest}
      />
    </>
  )
}

RequestsView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default RequestsView
