import sanity from '../libs/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { TextSection, TextBlock, NewsletterSection, List, ListItem } from '../../components/sanity'

const imageBuilder = imageUrlBuilder(sanity)
export const imageUrlFor = source => imageBuilder.image(source)

// Serializers:
// If element is not defined return null
const RenderSection = () => {
  return null
}

export const TextSectionSerializer = {
  types: {
    textSection: TextSection,
    block: RenderSection,
  },
}

export const NewsletterSerializer = {
  types: {
    newsletter: NewsletterSection,
    block: RenderSection,
  },
}

export const TextBlockSerializer = {
  types: {
    block: TextBlock,
  },
  list: List,
  listItem: ListItem,
}
