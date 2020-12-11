import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
        overflow: 'hidden',
      },
    },
  },
})
