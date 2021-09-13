import { StrictMode } from 'react'
import { render } from 'react-dom'
import Details from './Details'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SearchParams from './SearchParams'

function App() {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
