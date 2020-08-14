import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";
import { UsersProvider } from "./Context/Users";
import { CarProvider } from "./Context/CarProblems";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <UsersProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <CarProvider>
              <Route
                exact
                path="/home/:id"
                children={<UserDetails></UserDetails>}
              ></Route>
            </CarProvider>
          </UsersProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// git remote add origin https://github.com/amabelleS/Garage-react.git
