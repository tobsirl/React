import React from 'react'

const UserContext = React.createContext()

function UserContextProvider(props) {
  return <UserContext.Provider value="Paul" {...props} />
}

export { UserContext, UserContextProvider }
