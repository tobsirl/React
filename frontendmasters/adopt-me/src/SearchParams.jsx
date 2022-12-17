import { useState } from "react";

export default function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={() => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
