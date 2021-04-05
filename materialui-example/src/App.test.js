import { render, screen } from '@testing-library/react'
import Check from './pages/Check'
import Create from './pages/Create'
import Notes from './pages/Notes'

describe('renders the Notes page', () => {
  it('should display the notes text', () => {
    render(
      <Notes
        note={{
          title: "Yoshi's birthday bash",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          category: 'reminders',
          id: 1,
        }}
      />,
    )
    const notesElement = screen.getByText("Yoshi's birthday bash")
    expect(notesElement).toBeInTheDocument()
  })
})

describe('renders the Create page', () => {
  it('should display the create text', () => {
    render(<Create />)
    const createElement = screen.getByText(/create/i)
    expect(createElement).toBeInTheDocument()
  })

  describe('renders the Checkboxes page', () => {
    it('should display a checkbox', () => {
      render(<Check />)
      const checkboxInput = screen.getByRole('checkbox')
      expect(checkboxInput).toBeInTheDocument()
    })

    // it('should render a checkbox', () => {
    //   render(<Check />)
    //   const sunday = screen.getByRole('checkbox', {
    //     name: /sunday/i,
    //   })
    //   expect(sunday).toBeChecked(true)
    // })
  })
})
