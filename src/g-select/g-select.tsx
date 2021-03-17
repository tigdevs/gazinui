import React from 'react'
import { Select } from '@chakra-ui/react'
import { theme as gTheme } from '../theme'
import { GExtendTheme } from '../g-extend-theme'
import { SelectProps } from '@chakra-ui/select/dist/types/select'

const GSelect = ({ children, ...props }: Partial<SelectProps>) => {
  const theme = GExtendTheme(gTheme)

  return (
    <Select
      bg={theme.colors.white}
      size='md'
      color={theme.colors.gray[400]}
      borderRadius='4px'
      {...props}
    >
      {children}
    </Select>
  )
}

export { GSelect }
