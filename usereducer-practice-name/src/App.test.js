import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const button = screen.getByRole('button', {  name: /change name/i})
  expect(button).toBeInTheDocument()
})

test('should check for the name', () => {
  render(<App />)
  const text = screen.getByText(/name: paul/i)
  expect(text).toBeInTheDocument()
});