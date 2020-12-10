import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Dialog as RDialog } from '@reach/dialog'

const Dialog = ({ children, isOpen, onDismiss, className, ...props }) => (
  <RDialog isOpen={isOpen} onDismiss={onDismiss} {...props}>
    <div className={classnames('w-screen h-auto min-h-screen sm:min-h-0 p-4 sm:rounded-lg sm:max-w-xl', className)}>
      {children}
    </div>
  </RDialog>
)

Dialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
}

export default Dialog
