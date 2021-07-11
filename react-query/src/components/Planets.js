import React from 'react'
import { useQuery } from 'react-query'

import Planet from './Planet'

async function fetchPlanets() {
  const response = await fetch('http://swapi.dev/api/planets/')
  return response.json()
}
export default function Planets() {
  const { isLoading, isError, data, error } = useQuery(
    'planets',
    fetchPlanets,
    { staleTime: 0, cacheTime: 10 },
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{`Error Message: ${error}`}</p>
  }

  return (
    <div>
      <h2>Planets</h2>
      <div>
        {data.results.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}
      </div>
    </div>
  )
}
