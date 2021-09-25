import { Link } from 'react-router-dom'

function Pet({ name, animal, breed, location, id, images }) {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'

  if (images.length) {
    hero = images[0]
  }

  return (
    <Link to={`/details/${id}`}>
      <div>
        <img src={hero} alt={name} />
      </div>

      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
