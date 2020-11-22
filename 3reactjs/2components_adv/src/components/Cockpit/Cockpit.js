import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    const assignedclasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedclasses.push(classes.red); // red
    }
    if (props.persons.length <= 1) {
      assignedclasses.push(classes.bold); // red + bold
    }

  return (
    <div className={classes.Cockpit}>
      <h1>Henlo... hooman!!!</h1>
      <p className={assignedclasses.join(" ")}>Working! :)</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
