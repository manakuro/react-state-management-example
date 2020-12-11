import React from 'react'
import { Box } from 'src/components/UI/atoms/Box'

export const Header: React.FC = () => {
  return (
    <Box
      as="header"
      w="full"
      height={82}
      borderTop="2px"
      borderStyle="solid"
      boxShadow="xs"
    />
  )
}
