import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'
import './style.css'

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return (
      <div className="container">
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      </div>
    )
  })

  return <div>{jokeElements}</div>
}
