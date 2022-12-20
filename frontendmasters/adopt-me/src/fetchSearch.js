async function fetchSearch({ animal, location, breed }) {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  )

  if (!res.ok) {
    throw new Error(
      `Pet search not okay: ${res.status}, ${animal}, ${location}, ${breed}`,
    )
  }

  return res.json()
}

export default fetchSearch
