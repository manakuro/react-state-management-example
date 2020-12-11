import React from 'react'
import { Header } from 'src/components/UI/organisms/Header'
import { Flex } from 'src/components/UI/atoms/Flex'
import { Navigation } from 'src/components/UI/organisms/Navigation'

export const Layout: React.FC = (props) => {
  return (
    <Flex
      w="full"
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      overflow="hidden"
    >
      <Navigation />
      <Flex flex="1" flexDirection="column" minW="920px">
        <Header />
        <Flex as="main" flex="1 1 auto">
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  )
}
