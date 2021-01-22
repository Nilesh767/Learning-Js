import React, { Component } from "react";

import User from "../../components/User";

class AuthIndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <User name="Neo" age={22} />
      </div>
    );
  }
}

export default AuthIndexPage;
