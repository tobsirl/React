export default function Search({ query, handleQuery, children }) {
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>;
}
