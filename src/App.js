import React from "react";
import Navbar from "./components/navbar";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/addForm";
import NotFound from "./components/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SignIn from "./components/signin";
import createAccount from "./components/createAccount";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/createAccount" component={createAccount}></Route>
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/addProject" component={AddForm}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/Home" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
