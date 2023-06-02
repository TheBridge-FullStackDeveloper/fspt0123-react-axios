import React from "react";
import ReactDOM from "react-dom/client";
import { Redirect, Route, Switch } from "wouter";

import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Books from "./pages/Books";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Container = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />

      <Switch>
        <Route path="/countries" component={Countries} />
        <Route path="/country/:name" component={Country} />
        <Route path="/books" component={Books} />
        <Redirect to="/countries" />
      </Switch>
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
