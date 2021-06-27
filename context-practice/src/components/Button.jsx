import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Button() {
  const [theme, setTheme] = React.useContext(ThemeContext)
  return (
    <button className={`${theme}-theme`} onClick={() => setTheme('dark')}>
      Switch Theme
    </button>
  )
}

export default Button
