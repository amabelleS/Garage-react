// check this up on:  https://mamas-garage.netlify.app/

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import uuid from "react-uuid";
import { UsersProvider } from "./Context/Users";
import { CarProvider } from "./Context/CarProblems";

import Home from "./Pages/Home";
import Navbar from "./Components/Layout/Navbar";
import Register from "./Pages/Register";
import UserDetails from "./Components/UserDetails";
import Admin from "./Pages/Admin";
function App() {
  return (
    <div className="text-center">
      <Router>
        <Navbar />
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
              <Route path="/admin">
                <Admin />
              </Route>
            </CarProvider>
          </UsersProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// check this up on:  https://mamas-garage.netlify.app/
