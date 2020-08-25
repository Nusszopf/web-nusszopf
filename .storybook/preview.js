// https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
require('typeface-barlow')
import '../src/styles/tailwind.css'
import '../src/styles/global.css'

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
}
