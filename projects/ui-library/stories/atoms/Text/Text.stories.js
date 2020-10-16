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

export const Title_LG = () => <Text style="titleLg">Large Title</Text>
export const Title_MD = () => <Text style="titleMd">Medium Title</Text>
export const Title_SM = () => <Text style="titleSm">Small Title</Text>
export const Text_LG = () => <Text style="textLg">Large Text</Text>
export const Text_MD = () => <Text style="textMd">Medium Text</Text>
export const Text_SM = () => <Text style="textSm">Small Text</Text>
