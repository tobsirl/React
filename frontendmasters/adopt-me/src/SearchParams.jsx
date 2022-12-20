import { useState } from 'react'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
import Results from './Results.jsx'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from './fetchSearch.js'
import useBreedList from './useBreedList'

export default function SearchParams() {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  })
  const [animal, setAnimal] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          requestPets()
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed('')
            }}
            onBlur={(e) => {
              setAnimal(e.target.value)
              setBreed('')
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}
