import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "../../../axios";

import "./Posts.css";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Nilesh",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        //this.setState({ error: true });
        console.log(error);
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
      return (
        <div>
          <section className="Posts">{posts}</section>
          <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
        </div>
      );
    }
  }
}

export default Posts;
