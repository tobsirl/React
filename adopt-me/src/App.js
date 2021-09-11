import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
