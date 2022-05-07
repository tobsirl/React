import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './style.css'

export default function App() {
  const [darkMode, setDarkMode] = React.useState('')

  function toggleDarkMode() {
    setDarkMode(darkMode === 'dark' ? '' : 'dark')
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}
