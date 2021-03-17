import React from 'react'
import { InputProps } from '@chakra-ui/input/dist/types/input'
import { InputGroupProps } from '@chakra-ui/input/dist/types/input-group'

export type Element =
  | ((...props: unknown[]) => React.FC<unknown[]>)
  | React.FC<unknown[]>
  | React.Component

export type TGInput = {
  leftElement?: Element
  rightElement?: Element
  wrapperProps?: InputGroupProps
} & Partial<InputProps>
