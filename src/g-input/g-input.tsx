import React from 'react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { TGInput, Element } from './g-input.types'

export const GInput = ({
  leftElement,
  rightElement,
  wrapperProps,
  ...props
}: TGInput) => {
  const renderElement = (_element: Element): React.ReactNode => {
    if (typeof _element === 'object') {
      if (typeof (_element as React.Component).render !== 'undefined') {
        return (_element as React.Component).render()
      } else {
        return _element as React.ReactNode
      }
    }

    return (_element as React.FC)({})
  }

  return (
    <InputGroup {...wrapperProps}>
      {leftElement ? (
        <InputLeftElement pointerEvents='none' color='primary.600'>
          {renderElement(leftElement)}
        </InputLeftElement>
      ) : null}
      <Input
        bg='white'
        border='1px'
        borderColor='gray.300'
        borderRadius='4px'
        _placeholder={{ color: 'neutral.700' }}
        {...props}
      />
      {rightElement ? (
        <InputRightElement pointerEvents='none'>
          {renderElement(rightElement)}
        </InputRightElement>
      ) : null}
    </InputGroup>
  )
}
