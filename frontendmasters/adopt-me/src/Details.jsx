import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'

export default function Details() {
  const { id } = useParams()
  const results = useQuery(['details', id], fetchPet)
  if (results.isLoading) {
    return <h2>Loading...</h2>
  }

  if (results.isError) {
    return <h2>Error!</h2>
  }

  const pet = results.data.pet[0]

  return <h2>{pet}</h2>
}
