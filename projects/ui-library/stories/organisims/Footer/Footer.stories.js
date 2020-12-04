import React from 'react'
import Footer from './Footer.organism'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: '**Footer Organism** is a specific framed element for different footer variations.',
      },
    },
  },
}

export const Classy = () => <Footer className="bg-moss-400" variant="classy" />
export const Vercel = () => <Footer className="bg-moss-400" />
export const Auth0 = () => <Footer className="bg-moss-400" variant="auth0" />
