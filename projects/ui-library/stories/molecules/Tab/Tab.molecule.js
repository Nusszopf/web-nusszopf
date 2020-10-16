import React from 'react'
import PropTypes from 'prop-types'
import { useTabState, Tab as ReakitTab, TabList as ReakitTabList, TabPanel as ReakitTabPanel } from 'reakit/Tab'
import classnames from 'classnames'

const Tab = ({ ariaLabel, children, labelLeft, labelRight }) => {
  const tab = useTabState()
  const getIndex = id => {
    return tab.items.findIndex(item => item.id === id)
  }

  return (
    <>
      <div className="relative w-full h-12">
        <div className={classnames('w-full h-full')}>
          <div
            className={classnames(
              'border-2 border-gray-600 text-lg font-medium rounded-full h-full bg-gray-600 transform transition-transform duration-300 ease-in-out w-1/2 px-4 py-2',
              {
                'translate-x-full': getIndex(tab.currentId) === 1,
                'translate-x-0': getIndex(tab.currentId) === 0,
              }
            )}></div>
        </div>
        <ReakitTabList
          {...tab}
          className="absolute top-0 left-0 right-0 w-full h-full border-2 border-gray-600 rounded-full "
          aria-label={ariaLabel}>
          {[labelLeft, labelRight].map((label, index) => (
            <ReakitTab
              key={`tab-${index}`}
              className={classnames(
                'w-1/2 px-3 py-2 text-lg transition-colors duration-500 ease-in-out font-medium outline-none focus:outline-none',
                {
                  'text-white': getIndex(tab.currentId) === index,
                  'text-gray-600': getIndex(tab.currentId) !== index,
                }
              )}
              {...tab}>
              {label}
            </ReakitTab>
          ))}
        </ReakitTabList>
      </div>
      {React.Children.map(children, (child, index) => (
        <ReakitTabPanel
          key={`panel-${index}`}
          // animated={true}
          // animating={getIndex(tab.currentId) === index}
          className={classnames('transition-opacity duration-500 ease-in-out', {
            'opacity-100': getIndex(tab.currentId) === index,
            'opacity-0': getIndex(tab.currentId) !== index,
          })}
          {...tab}>
          {child}
        </ReakitTabPanel>
      ))}
    </>
  )
}

Tab.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
}

Tab.Panel = ({ children }) => <>{children}</>
Tab.Panel.displayName = 'Tab.Panel'
Tab.Panel.propTypes = { children: PropTypes.node }

export default Tab
