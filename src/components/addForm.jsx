import React from "react";
import { Component } from "react";
import { db, myAuth } from "./firbase";
import swal from "@sweetalert/with-react";
import { useEffect, setState } from "react";
class AddForm extends Component {
  state = {
    Login: false,
    title: "",
    describe: "",
  };

  ChangeHandler = (e) => {
    if (e.currentTarget.name === "title") {
      this.setState({
        title: e.currentTarget.value,
      });
    } else {
      this.setState({
        describe: e.currentTarget.value,
      });
    }
  };
  sendHandler = (e) => {
    e.preventDefault();
    db.collection("Posts")
      .add({
        Description: this.state.describe,
        Field: "computer engineering",
        title: this.state.title,
      })
      .then(
        swal({
          text: "Your Project Added!",
          icon: "success",
        })
      );
  };
  componentDidMount() {
    myAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ Login: true });
      } else {
        this.setState({
          Login: false,
        });
      }
    });
  }
  render() {
    if (this.state.Login === false)
      return <p className="container ">...please sign in first...</p>;
    return (
      <div>
        <form className="container pt-5">
          <div className="form-group row">
            <div className="col-5 row">
              <label htmlFor="">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.ChangeHandler}
              />
            </div>
            <div className=" col-5  row ml-auto">
              <label htmlFor="" type="text" className="col-3">
                Field:
              </label>
              <select className="form-control">
                <option value="computer">computer-engineering</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-5">
            <label htmlFor="" className="describe-text">
              Description:
            </label>
            <textarea
              name=""
              id=""
              rows="10"
              onChange={this.ChangeHandler}
              value={this.state.describ}
              className="form-control"
            ></textarea>
            <div className="form-group pt-2">
              <label htmlFor="" className="p-2">
                Upload your code here!
              </label>
              <input type="file" className="form-control-file c-p upload-btn" />
            </div>
          </div>
          <button onClick={this.sendHandler}>send</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
