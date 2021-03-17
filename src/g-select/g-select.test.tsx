import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { GazinProvider } from '../gazin-provider'
import { GSelect } from './g-select'

describe('GSelect', () => {
  it('should renders with primary color', () => {
    const { getByTestId } = render(
      <GazinProvider>
        <GSelect data-testid='__select'>
          <option value={1}>Opt1</option>
          <option value={2}>Opt2</option>
        </GSelect>
      </GazinProvider>
    ) as RenderResult

    const select = getByTestId('__select')

    expect(select.childNodes).toHaveLength(2)
  })
})
