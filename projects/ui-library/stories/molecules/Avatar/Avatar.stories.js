import React from 'react'
import Avatar from './Avatar.molecule'

export default {
  title: 'Design System/Molecules/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: '**Avatar Molecule**',
      },
    },
  },
}

export const Default = () => (
  <Avatar
    loading={false}
    user={{
      auth: {
        name: 'finn nuss',
        picture: 'https://source.unsplash.com/random',
      },
      data: { email: 'test@nusszopf.org' },
    }}
  />
)
