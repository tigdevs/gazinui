import { FlexProps } from '@chakra-ui/layout'
import { WithChildren } from '../with-children'

export type GSelectProps = WithChildren<{
  value?: string | number | null
  placeholder?: string | null
  onChange?: (value: string | number | null) => void
}> &
  Partial<FlexProps>
