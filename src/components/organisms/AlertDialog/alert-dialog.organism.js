import PropTypes from 'prop-types'
import {
  AlertDialogLabel,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogContent,
} from '@reach/alert-dialog'
import { Button, Text, Heading } from '../../atoms'

const AlertDialog = ({ showDialog, onCancel, onConfirm, title, description }) => {
  const cancelRef = React.useRef()
  return (
    <>
      {showDialog ? (
        <AlertDialogOverlay leastDestructiveRef={cancelRef}>
          <AlertDialogContent>
            <AlertDialogLabel>
              <Heading as="h3">{title}</Heading>
            </AlertDialogLabel>
            <AlertDialogDescription>
              <Text>{description}</Text>
            </AlertDialogDescription>
            <div className="alert-buttons">
              <Button onClick={onConfirm}>Bestätigen</Button>
              {onCancel && (
                <Button ref={cancelRef} onClick={onCancel}>
                  Abbrechen
                </Button>
              )}
            </div>
          </AlertDialogContent>
        </AlertDialogOverlay>
      ) : null}
    </>
  )
}

AlertDialog.propTypes = {
  showDialog: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default AlertDialog
