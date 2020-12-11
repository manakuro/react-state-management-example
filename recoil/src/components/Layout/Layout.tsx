import React from 'react'
import { Header } from 'src/components/UI/organisms/Header'
import { Box } from 'src/components/UI/atoms/Box'

export const Layout: React.FC = (props) => {
  return (
    <Box>
      <Header />
      <Box maxW={1120} as="main" m="0 auto" minH="100vh">
        {props.children}
      </Box>
    </Box>
  )
}
