import React from 'react'
import LoadingIndicator from './LoadingIndicator.atom'

export default {
  title: 'Design System/Atoms/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    docs: {
      description: {
        component:
          '**UI atom** which at first only provides the **styling for buttons**. Works as [Reakit Button](https://reakit.io/docs/button/) by default, but can also be used via `as` as another element if you only need the button style.',
      },
    },
  },
}

export const IconLeft = () => <LoadingIndicator />
