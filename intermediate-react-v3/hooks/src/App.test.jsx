import React from 'react'
import { render, screen } from '@testing-library/react'
import State from './State'
import Effect from './Effect'

describe('test for the <State /> component', () => {
  it('should check for the "useState Example" text', () => {
    render(<State />)

    const stateText = screen.getByText(/usestate example/i)

    expect(stateText).toHaveTextContent(/usestate example/i)
  })
})

describe('test for the <Effect /> component', () => {
  it('should check for the "useEffect Example" text', () => {
    render(<Effect />)

    const effectText = screen.getByText(/useeffect example/i)

    expect(effectText).toHaveTextContent(/useeffect example/i)
  })
})
