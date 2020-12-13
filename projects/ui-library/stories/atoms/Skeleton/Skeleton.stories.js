import React from 'react'
import Skeleton from './Skeleton.atom'

export default {
  title: 'Design System/Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: '**Skeleton Atom**',
      },
    },
  },
}

export const Main = () => <Skeleton className="bg-moss-400 h-44" />
