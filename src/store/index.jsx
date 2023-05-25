import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => {
  const { setTheme } = useContext(Context);
  return { setTheme };
};

export default Context;
