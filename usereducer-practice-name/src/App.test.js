import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /change name/i })
  expect(button).toBeInTheDocument()
})

test('should check for the name', () => {
  render(<App />)
  const text = screen.getByText(/name: paul/i)
  expect(text).toBeInTheDocument()
})

test('should click the button and check the result', () => {
  // arrange
  render(<App />)

  // act
  userEvent.click(screen.getByText('Change Name'))
  const text = screen.getByText(/name: simon/i)

  // assert
  expect(text).toBeInTheDocument()
})
