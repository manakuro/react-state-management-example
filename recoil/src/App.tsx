import React from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from './router'

export const App: React.FC = (props) => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  )
}
