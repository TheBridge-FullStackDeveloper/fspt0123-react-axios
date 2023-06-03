import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { getCountryDetail } from "../../services/countries";
import Card from "react-bootstrap/Card";

const Country = () => {
  const [, params] = useRoute("/country/:name");

  const { data: country, isFetching } = useQuery(["country"], () =>
    getCountryDetail({ params })
  );

  if (isFetching) return <p>Loading...</p>;

  return (
    <Card style={{ maxWidth: '25%' }}>
      <Card.Img variant="top" src={country?.flags.png} />
      <Card.Body>
        <Card.Title>{country?.name?.common}</Card.Title>
        <Card.Text>
          <p>Official name: {country?.name?.official}</p>
          <p>Area: {country?.area}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Country;
