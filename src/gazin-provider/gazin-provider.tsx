import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { GazinProviderProps } from './gazin-provider.types'
import { theme } from '../theme'

export const GazinProvider = ({ children, ...rest }: GazinProviderProps) => {
  return (
    <ChakraProvider theme={extendTheme(theme)} {...rest}>
      {children}
    </ChakraProvider>
  )
}
