import React from 'react'
import { Button } from '@chakra-ui/react'
import { GButtonProps } from './g-button.types'

export const GButton = ({ children, colorScheme, ...rest }: GButtonProps) => {
  return (
    <Button colorScheme={colorScheme ?? 'primary'} {...rest}>
      {children}
    </Button>
  )
}
