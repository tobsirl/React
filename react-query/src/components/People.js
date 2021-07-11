import React from 'react'
import { useQuery } from 'react-query'

import Person from './Person'

async function fetchPeople() {
  const response = await fetch('http://swapi.dev/api/people/')
  return response.json()
}
export default function Planets() {
  const { isLoading, isError, data, error } = useQuery('people', fetchPeople)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{`Error Message: ${error}`}</p>
  }

  return (
    <div>
      <h2>People</h2>
      <div>
        {data.results.map((person) => (
          <Person key={person.name} {...person} />
        ))}
      </div>
    </div>
  )
}
