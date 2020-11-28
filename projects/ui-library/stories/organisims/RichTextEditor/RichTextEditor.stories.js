import React from 'react'
import RichTextEditor from './RichTextEditor.organism'

export default {
  title: 'Design System/Organisms/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component: '**RichTextEditor Organism** based on [SlateJS](https://docs.slatejs.org/).',
      },
    },
  },
}

export const Default = () => <RichTextEditor color="stone" onChange={console.log} />
