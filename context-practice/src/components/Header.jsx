import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
  const value = React.useContext(ThemeContext)
  return (
    <header className={`${value}-theme`}>
      <h2>{value.slice(0, 1).toUpperCase() + value.slice(1)} Theme</h2>
    </header>
  )
}

export default Header
