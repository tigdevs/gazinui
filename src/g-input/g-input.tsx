import React from 'react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { theme as gTheme } from '../theme'
import { TGInput, Element } from './g-input.types'
import { GExtendTheme } from '../g-extend-theme'

const GInput = ({
  leftElement,
  rightElement,
  wrapperProps,
  ...props
}: TGInput) => {
  const theme = GExtendTheme(gTheme)

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
        <InputLeftElement
          pointerEvents='none'
          color={theme.colors.primary['600']}
        >
          {renderElement(leftElement)}
        </InputLeftElement>
      ) : null}
      <Input
        bg={theme.colors.white}
        border={theme.borders['1px']}
        borderColor={theme.colors.neutral['500']}
        borderRadius='4px'
        _placeholder={{ color: theme.colors.neutral['700'] }}
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

export { GInput }
