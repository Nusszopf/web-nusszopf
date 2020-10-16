import React from 'react'
import PropTypes from 'prop-types'
import { Loader, CheckCircle, Info, X, XCircle } from 'react-feather'
import { Clickable as ReakitClickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { Text } from '../../atoms'

const ToastType = {
  info: 'info',
  error: 'error',
  success: 'success',
  loading: 'loading',
}

const Toast = ({ message, className, type, id, onClose, ...props }) => (
  <ReakitClickable
    onClick={() => onClose(id)}
    className={classnames(
      'w-full sm:w-96 bg-gray-300 rounded-md flex items-start outline-none focus:outline-none justify-between p-5 text-gray-600',
      className
    )}
    {...props}>
    <div className="flex items-start">
      {type === ToastType.info && <Info className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastType.error && <XCircle className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastType.success && <CheckCircle className="flex-shrink-0 mr-2" size={25} />}
      {type === ToastType.loading && <Loader className="flex-shrink-0 mr-2 animate-spin" size={25} />}
      <Text style="textSm" className="leading-snug text-left" as="span">
        {message}
      </Text>
    </div>
    <X className="flex-shrink-0 ml-5 text-gray-500" size={26} />
  </ReakitClickable>
)

Toast.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ToastType)).isRequired,
}

export default Toast
