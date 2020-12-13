import React from 'react'
import Radiobox from './Radiobox.atom'
import { useRadioState, RadioGroup } from 'reakit/Radio'

export default {
  title: 'Design System/Atoms/Radiobox',
  component: Radiobox,
  parameters: {
    docs: {
      description: {
        component: '**Radiobox Atom** based on [Reakit Radio](https://reakit.io/docs/radio/).',
      },
    },
  },
}

export const Main = () => {
  const radio = useRadioState({ state: 'checked', orientation: 'vertical' })
  return (
    <div className="text-livid-500">
      <RadioGroup {...radio} aria-label="storybook">
        <Radiobox {...radio} value="checked" label="Is checked" />
        <Radiobox {...radio} value="unchecked" label="Is unchecked" />
      </RadioGroup>
    </div>
  )
}
export const Disabled = () => <Radiobox disabled={true} label="Is disabled" />
