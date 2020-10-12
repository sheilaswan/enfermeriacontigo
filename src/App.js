import React from "react";
import { Header } from "./components/HeaderComponent";
import { Home } from "./components/HomeComponent";
import { Footer } from "./components/FooterComponent";
import { QuienesSomos } from "./components/QuienesSomosComponent";
import { Contacto } from "./components/ContactoComponent";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/quienessomos">
            <QuienesSomos />
          </Route>
          <Route path="/contactanos">
            <Contacto />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
