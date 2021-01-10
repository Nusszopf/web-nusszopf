import { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X } from 'react-feather'

import { Button, Text } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/organisms'
import { serializeJSX } from 'ui-library/services/RichTextEditor.service'
import { CategoryButtonColor, CategoryBackgroundColor, CategoryLinkColor } from './RequestDialog.theme'
import { Request } from '~/assets/icons'
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
      className={classnames('text-stone-800 relative', CategoryBackgroundColor[request?.category])}
      {...props}>
      <div>
        <Button className="absolute top-0 right-0 p-1 m-3" variant="clean" size="baseClean" onClick={onDismiss}>
          <X />
        </Button>
        <div className="flex items-start -mt-0.5 mb-2">
          <Request size={22} className="flex-shrink-0 mt-1 mr-2.5" />
          <Text>{request?.title}</Text>
        </div>
        <Text variant="textSm">
          {cms.created_at} {new Date(request?.created_at).toLocaleDateString('de-DE')}
        </Text>
        <div className="mt-8 text-lg ">{richtText}</div>
      </div>
      <div className="mt-10 space-x-4 text-center">
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
