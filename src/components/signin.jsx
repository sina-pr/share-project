import React, { Component } from "react";
import { myAuth, provider } from "./firbase";
import swal from "@sweetalert/with-react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SignIn extends Component {
  state = {
    logIn: false,
    Email: "",
    Password: "",
  };
  gmailLoginHandler() {
    myAuth
      .signInWithPopup(provider)
      .then(() => {
        swal({
          title: "You Login successful",
          text: "click on add a project!",
          icon: "success",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

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
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(() => {
        swal({
          title: "You Login successful",
          text: "click on add a project!",
          icon: "success",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="border mt-5">
          <form>
            <div className="form-group m-5">
              <h4 className="border-bottom m-5">
                If Your are New, create Account or Signin with Gmail
              </h4>
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
              <i onClick={this.gmailLoginHandler}>
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  className=" google-icon mr-3 mt-2px cursor-pointer"
                  size="2x"
                />
              </i>

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

export default SignIn;
/*const SignUp = () => {
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
            />
          </div>
          <div className="form-group m-5">
            <label>password:</label>
            <input className="form-control"></input>
          </div>
          <div className="btn-holder pb-3">
            <button type="submit" className="btn btn-success ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;*/
