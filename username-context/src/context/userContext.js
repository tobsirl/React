import React, { useState } from 'react'

const UserContext = React.createContext()

function UserContextProvider(props) {
  const [usernameContext, setUsernameContext] = useState('')

  function changeUsername(username) {
    setUsernameContext(username)
  }

  return (
    <UserContext.Provider
      value={[usernameContext, changeUsername]}
      {...props}
    />
  )
}

export { UserContext, UserContextProvider }
