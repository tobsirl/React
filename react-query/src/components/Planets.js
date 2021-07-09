import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

async function fetchPlanets() {
  const response = await fetch('http://swapi.dev/api/planets/')
  return response.json()
}
export default function Planets() {
  const { isLoading, isError, data, error } = useQuery('planets', fetchPlanets)
  console.log(data)
  return (
    <div>
      <h2>Planets</h2>
    </div>
  )
}
