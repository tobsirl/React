import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

function App() {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Sudo',
      animal: 'Dog',
      breed: 'Wheaten Terrier',
    }),
  ])
}

render(React.createElement(App), document.getElementById('root'))
