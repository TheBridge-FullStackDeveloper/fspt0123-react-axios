import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getAllCountries } from "../../services/countries";

const Countries = () => {
  const { data: countries, isLoading } = useQuery("countries", () =>
    getAllCountries()
  );

  if (isLoading) return <h1>Estoy recogiendo los datos</h1>;

  if (countries.length === 0) return <h1>No hay countries</h1>;

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca2}>
          <Link href={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;
