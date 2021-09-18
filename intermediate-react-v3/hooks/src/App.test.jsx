import React from 'react'
import { render, screen } from '@testing-library/react'
import State from './State'

describe('test for the <State /> component', () => {
  it('should check for the "useState Example" text', () => {
    render(<State />)

    const stateText = screen.getByText(/usestate example/i)

    expect(stateText).toHaveTextContent(/usestate example/i)
  })
})
