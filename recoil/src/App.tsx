import React from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from './router'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles'

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme} resetCSS>
        <Router />
      </ChakraProvider>
    </RecoilRoot>
  )
}
