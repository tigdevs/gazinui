import { FlexProps } from '@chakra-ui/layout'
import { WithChildren } from '../with-children'

export type GOptionProps = WithChildren<{
  value: string | number
}> &
  Partial<FlexProps>
