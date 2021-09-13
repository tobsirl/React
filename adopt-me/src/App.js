import { StrictMode } from 'react'
import { render } from 'react-dom'
import Details from './Details'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchParams from './SearchParams'

function App() {
  return (
    <Router>
      <div>
        <h1>Adopt Me!</h1>
        <Route path="/search">
          <SearchParams />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </div>
    </Router>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
