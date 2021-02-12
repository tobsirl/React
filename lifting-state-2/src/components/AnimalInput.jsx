export default function AnimalInput({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="dogsName">Dogs Name:</label>
      <input id="dogsName" value={animal} onChange={onAnimalChange} />
    </div>
  );
}
