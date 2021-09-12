import { StrictMode } from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
