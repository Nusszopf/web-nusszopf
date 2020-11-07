import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Dialog as RDialog } from '@reach/dialog'

const Dialog = ({ children, isOpen, close, className, ...props }) => (
  <RDialog isOpen={isOpen} onDismiss={close} {...props}>
    <div className={classnames('w-screen h-screen sm:h-auto p-4 sm:rounded-lg sm:max-w-xl', className)}>{children}</div>
  </RDialog>
)

Dialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
}

export default Dialog
