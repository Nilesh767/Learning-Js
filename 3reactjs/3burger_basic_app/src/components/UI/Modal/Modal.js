import React, { Component } from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shpw !== this.props.show;
  }

  componentDidUpdate() {
    console.log('Modal did Update');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "trnaslateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            // This is causing the display BUG
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
