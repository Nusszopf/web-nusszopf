import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Stepper = ({ children, setChildren, currentChild }) => {
  useEffect(() => {
    setChildren(React.Children.toArray(children))
  }, [])

  return <>{currentChild ?? React.Children.toArray(children)[0]}</>
}

Stepper.propTypes = {
  children: PropTypes.node,
  currentChild: PropTypes.node,
  setChildren: PropTypes.func,
}

export default Stepper
