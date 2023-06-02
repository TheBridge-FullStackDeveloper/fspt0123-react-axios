import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { getCountryDetail } from "../../services/countries";

const Country = () => {
  const [, params] = useRoute("/country/:name");

  const { data: country, isFetching } = useQuery("country", () =>
    getCountryDetail({ params })
  );

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <p>Common: {country?.name?.common}</p>
      <p>Flag: {country?.flag}</p>
      <p>Official name: {country?.name?.official}</p>
      <p>Area: {country?.area}</p>
    </div>
  );
};

export default Country;
