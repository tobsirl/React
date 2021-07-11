import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Planet from './Planet'

async function fetchPlanets(key, page) {
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return response.json()
}
export default function Planets() {
  const [page, setPage] = useState(1)
  const { isLoading, isError, data, error } = useQuery(
    ['planets', page],
    fetchPlanets,
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
      <button onClick={setPage(1)}>page 1</button>
      <button onClick={setPage(2)}>page 2</button>
      <button onClick={setPage(3)}>page 3</button>
      
      <div>
        {data.results.map((planet) => (
          <Planet key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  )
}
