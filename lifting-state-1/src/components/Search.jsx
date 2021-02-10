export default function Search({ query, handleQuery, children }) {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}
