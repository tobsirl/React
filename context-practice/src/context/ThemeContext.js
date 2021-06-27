import React from 'react'
const ThemeContext = React.createContext()
export default function ThemeProvider(props) {
  const [theme, setTheme] = React.useState('light')
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

export { ThemeContext }
