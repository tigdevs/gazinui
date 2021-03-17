import React from 'react'
import { render } from '@testing-library/react'
import { GazinProvider } from '../gazin-provider'
import { GInput } from './g-input'

describe('GButton', () => {
  it('should render standard input', () => {
    const { getByTestId } = render(
      <GazinProvider>
        <GInput data-testid='__input' />
      </GazinProvider>
    )

    expect(getByTestId('__input')).toBeTruthy()
  })
})
