import React, { Component } from "react";
import Link from "next/link";

class errorPage extends Component {
  render() {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>
          Try
          <Link href="/">
            <a> Going Back</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default errorPage;
