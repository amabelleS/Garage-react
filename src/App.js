// check this up on:  https://mamas-garage.netlify.app/

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import uuid from "react-uuid";
// import { UsersProvider } from "./Context/Users/UsersState";
import { UsersState } from "./Context/Users/UsersState";
import { CarProvider } from "./Context/Fixings/CarProblems";

import Home from "./Pages/Home";
import Navbar from "./Components/Layout/Navbar";
import Register from "./Pages/Register";
import UserDetails from "./Components/UserDetails";
import Admin from "./Pages/Admin";
// import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="text-center">
      <Router>
        <Navbar />
        <Switch>
          <UsersState>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
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
              {/* <Route exact path="*">
                <NotFound></NotFound>
              </Route> */}
            </CarProvider>
          </UsersState>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// check this up on:  https://mamas-garage.netlify.app/
// I left here 2 ways in wich to wrap the context around the app.. for now
