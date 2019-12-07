export async function fetchCharacters() {
  const res = await fetch('https://swapi.co/api/people');
  const data = await res.json();

  return data;
}
