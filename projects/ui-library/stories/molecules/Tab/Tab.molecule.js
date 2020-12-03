import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
} from '@reach/tabs'

const Tab = ({ className, children, labelLeft, labelRight, initialIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const handleTabsChange = index => {
    setTabIndex(index)
  }

  return (
    <ReachTabs index={tabIndex} onChange={handleTabsChange} className="w-full">
      <div
        className={classnames(
          'relative w-full h-12 ring-transparent hover:ring-steel-700 hover:ring-opacity-25 ring-2 rounded-full transition duration-200',
          className
        )}>
        <div className={classnames('w-full h-full')} aria-hidden="true">
          <div
            className={classnames(
              'border-2 border-steel-700 text-lg font-medium h-full bg-steel-700 transform transition-all duration-200 ease-in-out w-1/2 px-4 py-2',
              {
                'translate-x-0 rounded-l-full': tabIndex === 0,
                'translate-x-full rounded-r-full': tabIndex === 1,
              }
            )}></div>
        </div>
        <ReachTabList>
          {[labelLeft, labelRight].map((label, index) => (
            <ReachTab
              key={`tab-${index}`}
              className={classnames({
                'text-steel-700': tabIndex !== index,
              })}>
              {label}
            </ReachTab>
          ))}
        </ReachTabList>
      </div>
      <ReachTabPanels>
        {React.Children.map(children, (child, index) => (
          <ReachTabPanel
            hidden={index !== tabIndex}
            key={`panel-${index}`}
            className="w-full outline-none focus:outline-none">
            {child}
          </ReachTabPanel>
        ))}
      </ReachTabPanels>
    </ReachTabs>
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
