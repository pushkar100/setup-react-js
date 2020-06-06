import React from 'react'
import { render, screen } from '@testing-library/react'

import Simple from '../src/example'

describe('Testing react testing library functionality', () => {
  test('Contains element having text "Hello"', () => {
    render(<Simple />)
    expect(screen.queryByText('Hello')).toBeTruthy()
  })
})
