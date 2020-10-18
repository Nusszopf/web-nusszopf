import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tab = ({ ariaLabel, className, children, labelLeft, labelRight, initialIndex = 0 }) => {
  const [current, setCurrent] = useState(`panel-${initialIndex}`)
  return (
    <>
      <div className={classnames('relative w-full h-12', className)}>
        <div className={classnames('w-full h-full')} aria-hidden="true">
          <div
            className={classnames(
              'border-2 border-gray-500 text-lg font-medium h-full bg-gray-500 transform transition-all duration-200 ease-in-out w-1/2 px-4 py-2',
              {
                'translate-x-0 rounded-l-full': current === 'panel-0',
                'translate-x-full rounded-r-full': current === 'panel-1',
              }
            )}></div>
        </div>
        <div
          role="tablist"
          aria-label={ariaLabel}
          className="absolute top-0 left-0 right-0 w-full h-full text-white border-2 border-gray-500 rounded-full">
          {[labelLeft, labelRight].map((label, index) => (
            <button
              key={`tab-${index}`}
              role="tab"
              aria-selected={current === `panel-${index}`}
              aria-controls={`panel-${index}`}
              tabIndex={index}
              onClick={() => setCurrent(`panel-${index}`)}
              className={classnames(
                'w-1/2 px-3 py-2 text-lg transition-colors duration-200 ease-in-out font-medium outline-none focus:outline-none',
                {
                  'text-gray-500': current !== `panel-${index}`,
                }
              )}>
              {label}
            </button>
          ))}
        </div>
      </div>
      {React.Children.map(children, (child, index) => (
        <div
          key={`panel-${index}`}
          role="tabpanel"
          tabIndex={index}
          aria-labelledby={`panel-${index}`}
          hidden={current !== `panel-${index}`}
          className="w-full outline-none focus:outline-none">
          {child}
        </div>
      ))}
    </>
  )
}

Tab.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  initialIndex: PropTypes.number,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
}

Tab.Panel = ({ children }) => <>{children}</>
Tab.Panel.displayName = 'Tab.Panel'
Tab.Panel.propTypes = { children: PropTypes.node }

export default Tab
