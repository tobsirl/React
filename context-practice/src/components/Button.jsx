import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Button() {
  const [theme] = React.useContext(ThemeContext)
  console.log(theme)
  return <button className={`${theme}-theme`}>Switch Theme</button>
}

export default Button
