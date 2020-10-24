import React from 'react'
import Text from './Text.atom'

export default {
  title: 'Design System/Atoms/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          '**UI atom** for inline text elements like `headers`, `paragraphs` and `spans`, to organize consistent font sizing. By default a `p` element, which can be changed via the `as` prop.',
      },
    },
  },
}

export const Title_LG = () => <Text variant="titleLg">Large Title</Text>
export const Title_MD = () => <Text variant="titleMd">Medium Title</Text>
export const Title_SM = () => <Text variant="titleSm">Small Title</Text>
export const Text_LG = () => <Text variant="textLg">Large Text</Text>
export const Text_MD = () => <Text variant="textMd">Medium Text</Text>
export const Text_SM = () => <Text variant="textSm">Small Text</Text>
