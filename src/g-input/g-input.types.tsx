import React from 'react'
import { InputProps } from '@chakra-ui/input/dist/types/input'
import { InputGroupProps } from '@chakra-ui/input/dist/types/input-group'
import { jsx } from '@emotion/react'

export type Element =
  | ((...props: unknown[]) => jsx.JSX.Element)
  | jsx.JSX.Element
  | React.Component

export type TGInput = {
  leftElement?: Element
  rightElement?: Element
  wrapperProps?: InputGroupProps
} & Partial<InputProps>
