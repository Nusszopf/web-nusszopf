import { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X } from 'react-feather'

import { Button, Text } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/molecules'
import { serializeJSX } from 'ui-library/services/RichTextEditor.service'
import { CategoryColor } from './RequestDialog.theme'

const RequestDialog = ({ isOpen, onDismiss, onContact, request, ...props }) => (
  <Dialog
    aria-label="Request Infos"
    isOpen={isOpen}
    onDismiss={onDismiss}
    className={classnames('text-livid-800', CategoryColor[request?.category])}
    {...props}>
    <div className="h-6">
      <Button className="float-right" variant="clean" size="baseClean" onClick={onDismiss}>
        <X />
      </Button>
    </div>
    <div>
      <Text className="mb-2">{request?.title}</Text>
      <div className="text-lg">
        {request?.descriptionTemplate?.map((node, idx) => (
          <Fragment key={`rq-${idx}`}>{serializeJSX(node)}</Fragment>
        ))}
      </div>
      <Text variant="textSm" className="mt-6">
        Erstellt am {new Date(request?.created_at).toLocaleDateString('de-DE')}
      </Text>
    </div>
    <div className="flex justify-center mt-6 space-x-4">
      <Button color="livid800" variant="outline" onClick={onContact}>
        Kontaktieren
      </Button>
      <Button color="livid800" variant="outline" onClick={onDismiss}>
        Schließen
      </Button>
    </div>
  </Dialog>
)

RequestDialog.propTypes = {
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  onContact: PropTypes.func,
  request: PropTypes.object,
}

export default RequestDialog
