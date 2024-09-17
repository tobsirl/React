import * as React from 'react'

function Greeting({ name }) {
  const [index, setIndex] = React.useState(0)

  const greetings = ['Hello', 'Hola', 'Bonjour']

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1
    setIndex(nextIndex)
  }

  return (
    <main>
      <h1>
        {greetings[index]}, {name}
      </h1>
      <button onClick={handleClick}>Next Greeting</button>
    </main>
  )
}

export default function App() {
  return <Greeting name="Tyler" />
}
