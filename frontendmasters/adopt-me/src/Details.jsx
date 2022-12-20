import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'
import Carousel from './Carousel'

export default function Details() {
  const { id } = useParams()
  const results = useQuery(['details', id], fetchPet)

  if (results.isLoading) {
    return <h2>Loading...</h2>
  }

  if (results.isError) {
    return <h2>Error!</h2>
  }

  const pet = results.data.pets[0]

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.location}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
      <div>
        <img src={pet.images[0]} alt={pet.name} />
      </div>
    </div>
  )
}
