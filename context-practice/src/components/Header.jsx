import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
  const [theme] = React.useContext(ThemeContext)
  return (
    <header className={`${theme}-theme`}>
      <h2>{theme.slice(0, 1).toUpperCase() + theme.slice(1)} Theme</h2>
    </header>
  )
}

export default Header
