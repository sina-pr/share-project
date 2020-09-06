import React, { Component, useEffect, setState } from "react";
import { db } from "./firbase";
class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    db.collection("Posts")
      .get()
      .then((data) => {
        const posts = data.docs.map((p) => {
          return (
            <div className="card w-90 mt-5">
              <p className="card-header">{p.data().Field}</p>
              <div className="card-body">
                <h1 className="card-title ">{p.data().title}</h1>
                <p className="card-text">{p.data().Description}</p>
              </div>
            </div>
          );
        });
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="position-sticky">
          <div className="m-5 searchbar-holder w-75 ml-auto mr-auto ">
            <input
              className="form-control"
              placeholder="title ..."
              type="text"
            />
            <button className="btn btn-success mb-1 rounded-left-0">
              search
            </button>
          </div>
        </div>

        {this.state.posts}
      </div>
    );
  }
}

export default Home;
