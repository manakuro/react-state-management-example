import React from 'react'
import { Home } from 'src/components/Home'
import { Layout } from 'src/components/Layout'

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
] as const

export type Routes = typeof routes[number]['path']
