import { useState } from 'react'
import { useFormikContext } from 'formik'
import { Plus } from 'react-feather'
import { isEqual } from 'lodash'
import classnames from 'classnames'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Text, Button } from 'ui-library/stories/atoms'
import { InfoCard } from 'ui-library/stories/molecules'
import { useScrollTop } from '~/utils/helper'
import { EditRequestDialog } from '~/containers'
import { RequestCard } from '~/components'

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
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <Text className="mb-2">Neues Gesuch</Text>
        <Text variant="textSm">
          Gesuche für dein Projekt kannst Du entweder jetzt oder zu einem späteren Zeitpunkt erstellen.
        </Text>
        <Button
          onClick={openDialog}
          className="mt-6"
          color="livid800"
          iconLeft={<Plus className="mr-2 -ml-2" />}
          size="large">
          Neues Gesuch erstellen
        </Button>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <Text className="mt-4 mb-4 lg:mt-0">Gesuche</Text>
        {projectFormik.values.requests.length > 0 ? (
          <>
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
    </>
  )
}

export default RequestsStep
