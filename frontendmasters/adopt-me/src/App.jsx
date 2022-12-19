import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './Details'
import SearchParams from './SearchParams'

function App() {
  return (
    <Router>
      <h1 id="something-important">Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </Router>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
