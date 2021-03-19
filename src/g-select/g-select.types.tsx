import React, { RefObject } from 'react'
import { FlexProps } from '@chakra-ui/layout'
import { WithChildren } from '../with-children'

export type InputType = RefObject<HTMLInputElement> &
  HTMLInputElement &
  EventTarget &
  ValueTracker

export type GSelectProps = WithChildren<{
  value?: string
  placeholder?: string | null
  onChange?: (value: string | number | null) => void
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}> &
  Partial<FlexProps>

export type ValueTracker = {
  _valueTracker: {
    getValue(): string
    setValue(value: string): void
  }
}
