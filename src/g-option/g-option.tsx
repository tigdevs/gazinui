import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { GOptionProps } from './g-option.types'

export const GOption = ({ children, ...props }: GOptionProps) => {
  return (
    <Flex
      size='md'
      flexGrow={1}
      px='12px'
      py='8px'
      whiteSpace='nowrap'
      overflow='hidden'
      color='gray.700'
      _hover={{
        bg: 'primary.100',
        color: 'primary.600'
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}
