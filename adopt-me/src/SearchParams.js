import { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import useBreedList from './useBreedList'
import Results from './Results'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
export default function SearchParams() {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    )
    const json = await res.json()

    setPets(json.pets)
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          requestPets()
        }}
      >
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
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
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
        <label htmlFor="theme">Theme</label>
        <select
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
          onBlur={(event) => setTheme(event.target.value)}
        >
          <option value="darkblue">Dark Blue</option>
          <option value="peru">Peru</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="mediumorchid">Medium Orchid</option>
        </select>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}
