import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { theme as gTheme } from '../theme'
import { GExtendTheme } from '../g-extend-theme'
import { GOptionProps } from './g-option.types'

export const GOption = ({ children, ...props }: GOptionProps) => {
  const THEME = GExtendTheme(gTheme)
  return (
    <Flex
      size='md'
      grow='1'
      px='12px'
      py='8px'
      whiteSpace='nowrap'
      overflow='hidden'
      color={THEME.colors.gray['700']}
      _hover={{
        bg: THEME.colors.primary['100'],
        color: THEME.colors.primary['600']
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}
