import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { GazinProvider } from '../gazin-provider'
import { GSelect } from './g-select'
import { GOption } from '../g-option/g-option'

describe('GSelect', () => {
  it('should renders with primary color', () => {
    const { getByTestId } = render(
      <GazinProvider>
        <GSelect data-testid='__select'>
          <GOption value={1}>Opt1</GOption>
          <GOption value={2}>Opt2</GOption>
        </GSelect>
      </GazinProvider>
    ) as RenderResult

    const select = getByTestId('__select')

    expect(select.childNodes).toHaveLength(2)
  })
})
