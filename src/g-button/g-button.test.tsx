import React from 'react'
import { render } from '@testing-library/react'
import { GButton } from './g-button'
import { GazinProvider } from '../gazin-provider'

describe('GButton', () => {
  it('should renders with primary color', () => {
    const { queryByText } = render(
      <GazinProvider>
        <GButton>Teste</GButton>
      </GazinProvider>
    )

    const button = queryByText('Teste')

    expect(button).toBeTruthy()
  })
})
