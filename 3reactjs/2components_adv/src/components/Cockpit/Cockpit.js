import React, {useEffect} from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('fake http req');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] Cleanup using useEffect')
    }
  }, []);// works as componentDidMount

  useEffect(() => {
    console.log('[Cockpit.js] II useEffect');
    
    return () => {
      console.log('[Cockpit.js] Cleanup using II useEffect');
    }
  });

    const assignedclasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedclasses.push(classes.red); // red
    }
    if (props.personsLength <= 1) {
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

export default React.memo(cockpit); // won't re-render cockpit while persons are re-rendered
