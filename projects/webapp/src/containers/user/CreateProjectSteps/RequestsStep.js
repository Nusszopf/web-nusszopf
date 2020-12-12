import { useState } from 'react'
import { useFormikContext } from 'formik'
import { PlusCircle } from 'react-feather'
import { isEqual } from 'lodash'
import classnames from 'classnames'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Text, Button } from 'ui-library/stories/atoms'
import { InfoCard } from 'ui-library/stories/molecules'
import { useScrollTop } from '~/utils/helper'
import { EditRequestDialog } from '~/containers'
import { RequestCard } from '~/components'
import { createProjectData as cms } from '~/assets/data'

const RequestsStep = () => {
  useScrollTop()
  const projectFormik = useFormikContext()
  const [currentRequest, setCurrentRequest] = useState()
  const [showDialog, setShowDialog] = useState(false)

  const openDialog = () => setShowDialog(true)

  const closeDialog = () => {
    setCurrentRequest(null)
    setShowDialog(false)
  }

  const onEdit = _currentRequest => {
    setCurrentRequest(_currentRequest)
    openDialog()
  }

  const handleDelete = _currentRequest => {
    const requests = projectFormik.values.requests.filter(request => !isEqual(request, _currentRequest))
    projectFormik.setFieldValue('requests', requests)
  }

  const handleCreate = request => {
    projectFormik.setFieldValue('requests', [...projectFormik.values.requests, request])
    closeDialog()
  }

  const handleUpdate = updatedRequest => {
    const requests = projectFormik.values.requests.map(request => {
      if (isEqual(request, currentRequest)) {
        return updatedRequest
      } else {
        return request
      }
    })
    projectFormik.setFieldValue('requests', requests)
    closeDialog()
  }

  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="text-center lg:text-left lg:pr-4 lg:col-start-2">
        <Text className="mb-2 text-left">{cms.requestsStep.title[0]}</Text>
        <Text variant="textSm" className="text-left hyphens-auto">
          {cms.requestsStep.description}
        </Text>
        <Button
          onClick={openDialog}
          color="stone"
          className="mt-8 bg-stone-300"
          iconLeft={<PlusCircle className="mr-2 -ml-2" />}
          size="large">
          {cms.requestsStep.action}
        </Button>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        {projectFormik.values.requests.length > 0 ? (
          <div className="mt-8 lg:mt-0">
            <Text className="mb-4 hyphens-auto">{cms.requestsStep.title[1]}</Text>
            {projectFormik.values.requests.map((request, index) => (
              <RequestCard
                key={`r-${index}`}
                variant="edit"
                request={request}
                onEdit={onEdit}
                onDelete={handleDelete}
                className={classnames({ 'mb-2': index < projectFormik.values.requests.length - 1 })}
              />
            ))}
          </div>
        ) : (
          <InfoCard className="mt-8 bg-livid-200 text-livid-700 lg:mt-0">{cms.requestsStep.info}</InfoCard>
        )}
      </FramedGridCard.Body.Col>
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

export default RequestsStep
