import * as React from "react";
import { fetchCountryData } from "./utils";
import "./App.css";

export default function CountryInfo() {
  const [countryCode, setCountryCode] = React.useState("DE");
  interface CountryData {
    name: string;
    capital: string;
    region: string;
    population: number;
    area: number;
  }

  const [data, setData] = React.useState<CountryData | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<CountryError | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const countryData = await fetchCountryData(countryCode);
        setData(countryData);
      } catch (err) {
        setError({ message: err instanceof Error ? err.message : String(err) });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [countryCode]);

  interface CountryError {
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
    setData(null); // Reset data when country changes
    setIsLoading(true); // Reset loading state
    setError(null); // Reset error state
  };
  return (
    <section>
      <header>
        <h1>Country Info:</h1>

        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span>Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && (
        <article>
          <h2>{data.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
}
