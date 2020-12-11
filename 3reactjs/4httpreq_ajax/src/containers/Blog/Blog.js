import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncComponent = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {

  state = {
    auth: true
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/posts/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa9233",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          {this.state.auth ? <Route path="/new-post" exact component={AsyncComponent} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/*<Redirect to="/posts" from="/" />*/}
        </Switch>
      </div>
    );
  }
}
export default Blog;
