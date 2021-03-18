import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { theme as gTheme } from '../theme'
import { GExtendTheme } from '../g-extend-theme'
import { GSelectProps } from './g-select.types'
import { GOption } from '../g-option/g-option'
import { GOptionProps } from '../g-option/g-option.types'

const GSelect = ({
  children,
  value,
  placeholder,
  onChange,
  ...props
}: GSelectProps) => {
  const THEME = GExtendTheme(gTheme)
  const DEFAULT_PLACEHOLDER = 'Selecione'
  const [open, setOpen] = useState(false)
  const [_value, _setValue] = useState<string | number | null>(null)
  const [_placeholder, _setPlaceholder] = useState(
    placeholder ?? DEFAULT_PLACEHOLDER
  )
  const [_currentOption, _setCurrentOption] = useState<JSX.Element | null>(null)
  const GRAY_400 = THEME.colors.gray['400']

  useEffect(() => {
    if (placeholder === undefined) {
      _setPlaceholder(DEFAULT_PLACEHOLDER)
    } else {
      _setPlaceholder(placeholder)
    }
  }, [placeholder])

  useEffect(() => {
    if (value !== undefined) {
      _setValue(value)
    }
  }, [value])

  useEffect(() => {
    let optionFound = false

    if (_value !== null) {
      for (const _children of children as React.ReactElement<GOptionProps>[]) {
        if (_children.props.value === _value) {
          _setCurrentOption(
            <GOption value='test' _hover={{}}>
              {_children.props.children}
            </GOption>
          )
          optionFound = true

          break
        }
      }
    }

    if (!optionFound) {
      _setCurrentOption(
        <GOption value='' color={GRAY_400} _hover={{}}>
          {_placeholder}
        </GOption>
      )
    }
  }, [_value, _placeholder, children, GRAY_400])

  const toggle = () => {
    setOpen(!open)
  }

  const changeValue = (newValue: string | number) => {
    _setValue(newValue)
    setOpen(false)

    if (value !== undefined && onChange && typeof onChange === 'function') {
      onChange(value)
    }
  }

  return (
    <Flex
      bg={THEME.colors.white}
      color={THEME.colors.gray[400]}
      border={THEME.borders['1px']}
      borderColor={THEME.colors.gray['300']}
      borderRadius='4px'
      position='relative'
      userSelect='none'
      justifyItems='stretch'
      alignItems='center'
      onClick={toggle}
      {...props}
    >
      {_currentOption}
      {open ? (
        <ChevronUpIcon
          color={THEME.colors.primary['600']}
          mx='12px'
          w='20px'
          h='19px'
        />
      ) : (
        <ChevronDownIcon
          color={THEME.colors.primary['600']}
          mx='12px'
          w='20px'
          h='19px'
        />
      )}
      {open ? (
        <Flex
          direction='column'
          position='absolute'
          top='calc(100% + 8px)'
          left='0'
          width='100%'
          py='15px'
          borderRadius='4px'
          background={THEME.colors.white}
          boxShadow='0px 3px 7px rgba(4, 47, 101, 0.1)'
        >
          {(children as React.ReactElement<GOptionProps>[]).map(
            (option, index) => {
              const props = { ...option.props }

              props.key = index
              props.onClick = (event) => {
                event.stopPropagation()

                changeValue(props.value as string | number)
              }

              return option.type.prototype.constructor(props)
            }
          )}
        </Flex>
      ) : null}
    </Flex>
  )
}

export { GSelect }
