import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

function Header() {
  const username = useContext(UserContext)
  return (
    <header>
      <p>Welcome, {username}!</p>
    </header>
  )
}

export default Header
