import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Redirect, Route, Switch } from "wouter";
import NavBar from "./components/NavBar";
import { useTheme } from "./hooks";
import Quotes from "./pages/Quotes";
import Time from "./pages/Time";
import Context from "./store";

const Container = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Context.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>
        <NavBar />

        <Switch>
          <Route path="/clock" component={Time} />
          <Route path="/quotes" component={Quotes} />
          <Redirect to="/quotes" />
        </Switch>
      </ThemeProvider>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
