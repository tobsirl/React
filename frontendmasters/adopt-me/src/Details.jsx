import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'

function Details() {
  const [showModal, setShowModal] = useState(false)
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
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button onClick={() => setShowModal(false)}>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
      <div>
        <img src={pet.images[0]} alt={pet.name} />
      </div>
    </div>
  )
}

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary
