import React from 'react'
import { useQuery } from 'react-query'

async function fetchPlanets() {
  const response = await fetch('http://swapi.dev/api/planets/')
  return response.json()
}
export default function Planets() {
  const { isLoading, isError, data, error } = useQuery('planets', fetchPlanets)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{`Error Message: ${error}`}</p>
  }

  return (
    <div>
      <h2>Planets</h2>
      {JSON.stringify(data, 2, null)}
    </div>
  )
}
