export default function DogsName({dogsName, onDogsNameChange}) {
  return (
    <form>
      <label htmlFor="dogsName">Dogs Name:</label>
      <br />
      <input id="dogsName" value={dogsName} onChange={onDogsNameChange} />
    </form>
  );
}
