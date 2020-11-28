import React from 'react'
import PropTypes from 'prop-types'
import { Loader, CheckCircle, Info, X, XCircle } from 'react-feather'
import { Clickable as ReakitClickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { Text } from '../../atoms'
import { ToastVariant } from './Toast.theme'

const Toast = ({ message, className, type, id, onClose, ...props }) => (
  <ReakitClickable
    onClick={() => onClose(id)}
    className={classnames(
      'w-full sm:w-96 bg-livid-300 rounded-md flex items-start outline-none focus:outline-none justify-between p-5 text-livid-800 shadow-md',
      className
    )}
    {...props}>
    <div className="flex items-start">
      {type === ToastVariant.info && <Info className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastVariant.error && <XCircle className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastVariant.success && <CheckCircle className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastVariant.loading && <Loader className="flex-shrink-0 mr-2 animate-spin" size={25} />}
      <Text variant="textSm" className="leading-snug text-left" as="span">
        {message}
      </Text>
    </div>
    <X className="flex-shrink-0 ml-5" size={26} />
  </ReakitClickable>
)

Toast.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ToastVariant)).isRequired,
}

export default Toast
