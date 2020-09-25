import React from "react";
import { Component } from "react";
import { myAuth } from "./firbase";

class createAccount extends Component {
  state = {
    Email: "",
    Password: "",
  };

  ChangeHandler = (e) => {
    if (e.currentTarget.name === "Email") {
      this.setState({
        Email: e.currentTarget.value,
      });
    } else {
      this.setState({
        Password: e.currentTarget.value,
      });
    }
  };
  sendHandler = (e) => {
    e.preventDefault();
    myAuth
      .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(() => {
        alert("done!");
      })
      .catch((err) => alert(err));
  };
  render() {
    return (
      <div className="container">
        <div className="border mt-5">
          <form>
            <div className="form-group m-5">
              <label htmlFor="">Email Address:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Email@example.com"
                autoFocus
                name="Email"
                onChange={this.ChangeHandler}
              />
            </div>
            <div className="form-group m-5">
              <label>password:</label>
              <input
                className="form-control"
                onChange={this.ChangeHandler}
              ></input>
            </div>
            <div className="btn-holder pb-3">
              <button onClick={this.sendHandler} className="btn btn-success ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default createAccount;
