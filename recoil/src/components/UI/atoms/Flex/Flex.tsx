import React from 'react'
import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react'

type Props = FlexProps

export const Flex: React.FC<Props> = (props) => {
  return <ChakraFlex {...props} />
}
