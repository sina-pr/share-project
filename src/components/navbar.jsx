import React, { Component } from "react";
import "../index.css";
import { myAuth } from "./firbase";
import { Router, Route, Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    login: false,
  };
  componentDidMount() {
    myAuth.onAuthStateChanged((User) => {
      if (User) {
        this.setState({ login: true });
      } else {
        {
          this.setState({ login: false });
        }
      }
    });
  }
  LogOutHandler() {
    myAuth.signOut();
    alert("h");
  }
  getButtons() {
    if (this.state.login === true) {
      return (
        <div>
          <button onClick={this.LogOutHandler} className="btn btn-danger mr-2">
            Log out
          </button>

          <Link to="/AddProject">
            <button className="btn btn-primary">Add a Project</button>
          </Link>
        </div>
      );
    } else {
      return (
        <Link to="/sign-in">
          {" "}
          <button className="btn btn-warning">Login</button>
        </Link>
      );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-h">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse cap" id="navbarText">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createAccount">
                create account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="3">
                about
              </Link>
            </li>
          </ul>
          {this.getButtons()}
        </div>
      </nav>
    );
  }
}

export default Navbar;

/*const Navbar = () => {
  myAuth.onAuthStateChanged((User) => {
    if (User) {
      alert(User.email);
    } else {
      console.log("nope");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-h">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto toUpper">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="sign-in">
              sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="3">
              about
            </Link>
          </li>
        </ul>
        <Link to="/addProject">
          <button className="btn btn-primary btn-lg">Add Project!</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;*/
