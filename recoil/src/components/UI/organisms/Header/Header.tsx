import React from 'react'
import { Flex } from 'src/components/UI/atoms/Flex'

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="full"
      height={82}
      borderStyle="solid"
      boxShadow="xs"
      px="6"
      alignItems="center"
    />
  )
}
