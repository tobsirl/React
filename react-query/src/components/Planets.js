import React from 'react'
import { useQuery } from 'react-query'

async function fetchPlanets() {
  const response = await fetch('http://swapi.dev/api/planets/')
  return response.json()
}
export default function Planets() {
  const { data, status } = useQuery('planets', fetchPlanets)
  return (
    <div>
      <h2>Planets</h2>
    </div>
  )
}
