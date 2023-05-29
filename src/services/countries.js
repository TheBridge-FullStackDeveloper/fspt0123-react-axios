import instance from "./config";

export const getAllCountries = () => {
  return instance.get("/all").then(res => res.data);
};

export const getCountryDetail = ({ params }) => {
  return instance.get("/name/" + params.name).then(res => res.data[0]);
};
