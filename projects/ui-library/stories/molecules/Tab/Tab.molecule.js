import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Tabs, TabList, Tab as ReachTab, TabPanels, TabPanel } from '@reach/tabs'

const Tab = ({ className, children, labelLeft, labelRight, initialIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const handleTabsChange = index => {
    setTabIndex(index)
  }

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange}>
      <div className={classnames('relative w-full h-12', className)}>
        <div className={classnames('w-full h-full')} aria-hidden="true">
          <div
            className={classnames(
              'border-2 border-gray-500 text-lg font-medium h-full bg-gray-500 transform transition-all duration-200 ease-in-out w-1/2 px-4 py-2',
              {
                'translate-x-0 rounded-l-full': tabIndex === 0,
                'translate-x-full rounded-r-full': tabIndex === 1,
              }
            )}></div>
        </div>
        <TabList>
          {[labelLeft, labelRight].map((label, index) => (
            <ReachTab
              key={`tab-${index}`}
              className={classnames({
                'text-gray-500': tabIndex !== index,
              })}>
              {label}
            </ReachTab>
          ))}
        </TabList>
      </div>
      <TabPanels>
        {React.Children.map(children, (child, index) => (
          <TabPanel
            hidden={index !== tabIndex}
            key={`panel-${index}`}
            className="w-full outline-none focus:outline-none">
            {child}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
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
