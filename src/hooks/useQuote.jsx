import { useEffect, useState } from "react";
import { IMAGES, QUOTES } from "../constants";
import { getRandomItem } from "../utils";

export const useQuote = () => {
  let id = 0;

  const handleProps = () => ({
    image: getRandomItem(IMAGES),
    quote: getRandomItem(QUOTES),
  });

  const [props, setProps] = useState(handleProps());

  useEffect(() => {
    id = setInterval(() => {
      setProps(handleProps());
    }, 5000);
  }, []);

  const { image, quote } = props;

  return { image, quote };
};
