import React, {
  BaseSyntheticEvent,
  JSXElementConstructor,
  useEffect,
  useRef,
  useState
} from 'react'
import { jsx } from '@emotion/react'
import { Flex } from '@chakra-ui/layout'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { GSelectProps, InputType } from './g-select.types'
import { GOption } from '../g-option'
import { GOptionProps } from '../g-option'

type JSXElementConstructorEx<T> = JSXElementConstructor<T> & {
  prototype: {
    constructor: (...props: T[]) => JSXElementConstructor<T>
  }
}

export const GSelect = ({
  children,
  value,
  placeholder,
  inputProps,
  ...props
}: GSelectProps) => {
  const DEFAULT_PLACEHOLDER = 'Selecione'
  const [open, setOpen] = useState(false)
  const [_placeholder, _setPlaceholder] = useState(
    placeholder ?? DEFAULT_PLACEHOLDER
  )
  const [_currentOption, _setCurrentOption] = useState<JSX.Element | null>(null)
  const selectRef = useRef(null)
  const inputRef = useRef<InputType | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: Event & MouseEvent) => {
      if (
        selectRef?.current &&
        ((selectRef?.current as unknown) as Node).contains(
          (e.target as unknown) as Node
        )
      ) {
        return
      }

      setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    if (placeholder === undefined) {
      _setPlaceholder(DEFAULT_PLACEHOLDER)
    } else {
      _setPlaceholder(placeholder)
    }
  }, [placeholder])

  useEffect(() => {
    let optionFound = false

    if (value !== null && value !== undefined) {
      for (const _children of children as React.ReactElement<GOptionProps>[]) {
        if (_children.props.value === value) {
          _setCurrentOption(
            <GOption value={value} _hover={{}}>
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
        <GOption value='' color='gray.400' _hover={{}}>
          {_placeholder}
        </GOption>
      )
    }
  }, [value, _placeholder, children])

  const toggle = () => {
    setOpen(!open)
  }

  const inputDispatchEvent = (eventName: string) => {
    const input = inputRef.current

    if (!input) {
      return
    }

    const eventNameSanitized = eventName.toLowerCase()
    const bufferName =
      eventNameSanitized.charAt(0).toUpperCase() + eventNameSanitized.slice(1)

    if (eventNameSanitized === 'change') {
      input.value = input._valueTracker.getValue()
      input._valueTracker.setValue('__placeholder__')
    }

    if (typeof input[eventNameSanitized] === 'function') {
      input[eventNameSanitized]()
    } else {
      let ev: Event

      if (window[`${bufferName}Event`]) {
        ev = new window[`${bufferName}Event`](eventNameSanitized)
      } else {
        ev = new Event(eventNameSanitized)
      }

      ev.initEvent(eventNameSanitized, true)
      input.dispatchEvent(ev)
    }
  }

  useEffect(() => {
    if (open) {
      inputDispatchEvent('focus')
    } else {
      inputDispatchEvent('blur')
    }
  }, [open])

  const changeValue = (newValue: string) => {
    if (newValue !== value && inputRef.current) {
      inputRef.current._valueTracker.setValue(newValue)

      inputDispatchEvent('change')
      inputDispatchEvent('input')
    }

    setOpen(false)
  }

  return (
    <Flex
      bg='white'
      border='1px'
      borderColor='gray.300'
      borderRadius='4px'
      position='relative'
      userSelect='none'
      justifyItems='stretch'
      alignItems='center'
      onClick={toggle}
      ref={selectRef}
      {...props}
    >
      {_currentOption}
      {open ? (
        <ChevronUpIcon color='primary.600' mx='12px' w='20px' h='19px' />
      ) : (
        <ChevronDownIcon color='primary.600' mx='12px' w='20px' h='19px' />
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
          backgroundColor='white'
          boxShadow='0px 3px 7px rgba(0, 0, 0, 0.1)'
          zIndex={100}
        >
          {(children as React.ReactElement<GOptionProps>[]).map(
            (option: jsx.JSX.Element, index) => {
              const props = { ...option.props }

              props.key = index
              props.onClick = (event: BaseSyntheticEvent) => {
                event.stopPropagation()

                changeValue(props.value)
              }

              return (option.type as JSXElementConstructorEx<GOptionProps>).prototype.constructor(
                props
              )
            }
          )}
        </Flex>
      ) : null}
      <Flex position='absolute' w='0' h='0'>
        {
          ((
            <input {...inputProps} type='text' ref={inputRef} value={value} />
          ) as unknown) as InputType
        }
      </Flex>
    </Flex>
  )
}
