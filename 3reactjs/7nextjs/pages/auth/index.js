import React, { Component } from "react";

import User from "../../components/User";

class AuthIndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Auth Page - {this.props.appName}</h1>
        <User name="Neo" age={22} />
      </div>
    );
  }
}

AuthIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Some Auth App" });
      }, 1000);
    });
    return promise;
};

export default AuthIndexPage;
