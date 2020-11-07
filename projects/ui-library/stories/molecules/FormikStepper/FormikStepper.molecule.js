import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const FormikStepper = ({ children, setChildren, formik, currentChild, ...props }) => {
  useEffect(() => {
    setChildren(React.Children.toArray(children))
  }, [])

  return (
    <form onSubmit={formik.handleSubmit} {...props}>
      {currentChild && React.cloneElement(currentChild, { formik, ...currentChild.props })}
    </form>
  )
}

FormikStepper.propTypes = {
  formik: PropTypes.object,
  children: PropTypes.node,
  currentChild: PropTypes.node,
  setChildren: PropTypes.func,
}

export default FormikStepper
export { default as useFormikStepper } from './useFormikStepper'
