import { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X } from 'react-feather'

import { Button, Text } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/molecules'
import { serializeJSX } from 'ui-library/services/RichTextEditor.service'
import { CategoryButtonColor, CategoryBackgroundColor, CategoryLinkColor } from './RequestDialog.theme'
import { requestDialogData as cms } from '~/assets/data'

const RequestDialog = ({ isOpen, onDismiss, onContact, request, ...props }) => {
  const richtText = useMemo(() => {
    if (request) {
      return request?.descriptionTemplate?.map((node, idx) => (
        <Fragment key={`rq-${idx}`}>{serializeJSX(node, CategoryLinkColor[request.category])}</Fragment>
      ))
    } else {
      return null
    }
  }, [request])

  return (
    <Dialog
      aria-label="Request Infos"
      isOpen={isOpen}
      onDismiss={onDismiss}
      className={classnames('text-stone-800', CategoryBackgroundColor[request?.category])}
      {...props}>
      <div className="h-6">
        <Button className="float-right" variant="clean" size="baseClean" onClick={onDismiss}>
          <X />
        </Button>
      </div>
      <div>
        <Text className="mb-2">{request?.title}</Text>
        <div className="text-lg">{richtText}</div>
        <Text variant="textSm" className="mt-6">
          {cms.created_at} {new Date(request?.created_at).toLocaleDateString('de-DE')}
        </Text>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <Button color="stone" className={CategoryButtonColor[request?.category]} onClick={onContact}>
          {cms.actions.contact}
        </Button>
        <Button color="stone" onClick={onDismiss}>
          {cms.actions.close}
        </Button>
      </div>
    </Dialog>
  )
}

RequestDialog.propTypes = {
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  onContact: PropTypes.func,
  request: PropTypes.object,
}

export default RequestDialog
