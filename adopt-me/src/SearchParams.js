import { useState } from 'react'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
export default function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')

  const breeds = []

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="Animal"
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.vaule)}
            onBlur={(event) => setAnimal(event.target.vaule)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
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
        ;<button>Submit</button>
      </form>
    </div>
  )
}
