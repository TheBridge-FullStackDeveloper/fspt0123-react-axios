import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Clock from "./components/Clock";
import List from "./components/List";
import { useTheme } from "./hooks/useTheme";
import Context from "./store";

const Container = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Context.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>
        <Clock />
        <List />
      </ThemeProvider>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
