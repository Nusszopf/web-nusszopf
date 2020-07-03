import { Dialog } from '@reach/dialog'
import PropTypes from 'prop-types'

const MyDialog = ({ children, isOpen, close, ...other }) => (
  <Dialog isOpen={isOpen} onDismiss={close} {...other}>
    {children}
  </Dialog>
)

MyDialog.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
}

export default MyDialog
