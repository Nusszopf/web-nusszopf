import React from 'react'
import RichTextEditor from './RichTextEditor.organism'

export default {
  title: 'Design System/Organisms/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component: '**RichTextEditor Organism**.',
      },
    },
  },
}

export const Default = () => <RichTextEditor onChange={console.log} />
