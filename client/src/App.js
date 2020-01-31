import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Route
          exact
          path="/"
          render={props => {
            return <Login {...props} />;
          }}
        />

        <Route
          exact
          path="/register"
          render={props => {
            return <Register {...props} />;
          }}
        />

        <Route
          exact
          path="/dad-jokes"
          render={props => {
            return <Jokes {...props} />;
          }}
        />
      </Container>
    </>
  );
}

export default App;
