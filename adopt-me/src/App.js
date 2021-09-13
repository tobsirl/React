import { StrictMode } from 'react'
import { render } from 'react-dom'
import Details from './Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchParams from './SearchParams'

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
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
