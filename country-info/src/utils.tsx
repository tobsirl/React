interface CountryApiResponse {
  name: string;
  capital: string;
  region: string;
  population: number;
  area: number;
}

export interface CountryData {
  name: string;
  capital: string;
  region: string;
  population: number;
  area: number;
}

export async function fetchCountryData(
  countryCode: string
): Promise<CountryData> {
  const url = `https://restcountries.com/v2/alpha/${countryCode}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Error fetching data for country code ${countryCode}: ${response.statusText}`
    );
  }
  const data: CountryApiResponse = await response.json();
  return {
    name: data.name,
    capital: data.capital,
    region: data.region,
    population: data.population,
    area: data.area,
  };
}
