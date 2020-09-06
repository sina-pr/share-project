import React, { Component, useEffect, setState } from "react";
import { db } from "./firbase";
class Home extends Component {
  state = {
    searchInput: "",
    allPosts: [],
    posts: [],
  };

  onChangeHander = (e) => {
    const searchInput = e.currentTarget.value;
    this.setState({ posts: this.state.allPosts });
    this.setState({ searchInput });
  };
  findTitle = (e) => {
    const posts = [...this.state.allPosts];

    const filltered = posts.filter((p) => p.title == this.state.searchInput);

    this.setState({ posts: filltered });
  };
  componentDidMount() {
    db.collection("Posts")
      .get()
      .then((data) => {
        const allPosts = data.docs.map((p) => {
          return p.data();
        });
        this.setState({ allPosts });
        this.setState({ posts: allPosts });
      });
  }

  /*db.collection("Posts")
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
      });*/

  render() {
    return (
      <div className="container">
        <div className="position-sticky">
          <div className="m-5 searchbar-holder w-75 ml-auto mr-auto ">
            <input
              className="form-control"
              placeholder="title ..."
              type="text"
              onChange={this.onChangeHander}
            />
            <button
              className="btn btn-success mb-1 rounded-left-0 "
              onClick={this.findTitle}
            >
              search
            </button>
          </div>
        </div>

        {this.state.posts.map((p) => {
          return (
            <div className="card w-90 mt-5">
              <p className="card-header">{p.Field}</p>
              <div className="card-body">
                <h1 className="card-title ">{p.title}</h1>
                <p className="card-text">{p.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
