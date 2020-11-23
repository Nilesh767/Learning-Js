import React, {useEffect} from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');//runs after every render in react VDOM
  })

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
      <h1>{props.title}</h1>
      <p className={assignedclasses.join(" ")}>Working! :)</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
