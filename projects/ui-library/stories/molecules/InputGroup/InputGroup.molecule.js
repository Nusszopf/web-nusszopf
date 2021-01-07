import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input } from '../../atoms'
import Element from './components/Element'

const InputGroup = ({ children, className, ...props }) => (
  <div className={classnames('relative', className)} {...props}>
    {React.Children.map(children, child => (
      <>
        {child?.type?.displayName === 'InputGroup.Input' &&
          React.cloneElement(child, {
            className: classnames(
              {
                'pl-12':
                  children.findIndex(child => child?.type?.displayName === 'InputGroup.LeftElement') >= 0 &&
                  child.props.size !== 'large',
                'pr-12':
                  children.findIndex(child => child?.type?.displayName === 'InputGroup.RightElement') >= 0 &&
                  child.props.size !== 'large',
                'pl-16':
                  children.findIndex(child => child?.type?.displayName === 'InputGroup.LeftElement') >= 0 &&
                  child.props.size === 'large',
                'pr-16':
                  children.findIndex(child => child?.type?.displayName === 'InputGroup.RightElement') >= 0 &&
                  child.props.size === 'large',
              },
              child.props.className
            ),
          })}
        {child?.type?.displayName === 'InputGroup.LeftElement' &&
          React.cloneElement(child, {
            className: classnames('left-0', child.props.className),
          })}
        {child?.type?.displayName === 'InputGroup.RightElement' &&
          React.cloneElement(child, {
            className: classnames('right-0', child.props.className),
          })}
      </>
    ))}
  </div>
)
InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

InputGroup.Input = forwardRef(({ className, ...props }, ref) => (
  <Input ref={ref} className={classnames(className)} {...props} />
))
InputGroup.Input.displayName = 'InputGroup.Input'
InputGroup.Input.propTypes = { className: PropTypes.string }

InputGroup.LeftElement = props => <Element {...props} />
InputGroup.LeftElement.displayName = 'InputGroup.LeftElement'

InputGroup.RightElement = props => <Element {...props} />
InputGroup.RightElement.displayName = 'InputGroup.RightElement'

export default InputGroup
