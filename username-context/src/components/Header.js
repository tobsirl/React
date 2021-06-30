import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

function Header() {
  const [usernameContext] = useContext(UserContext)
  return (
    <header>
      <p>Welcome, {usernameContext}!</p>
    </header>
  )
}

export default Header
