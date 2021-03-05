import { extendTheme } from '@chakra-ui/react'
import { theme } from '../theme'
import merge from 'lodash.merge'

export const GExtendTheme = (extendedTheme: object) => {
  const mergedTheme = merge(theme, extendedTheme)

  return extendTheme({ ...mergedTheme })
}
