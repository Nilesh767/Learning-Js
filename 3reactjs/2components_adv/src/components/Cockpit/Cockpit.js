import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // const timer = setTimeout(() => {
    //   alert('fake http req');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] Cleanup using useEffect");
    };
  }, []); // works as componentDidMount

  useEffect(() => {
    console.log("[Cockpit.js] II useEffect");

    return () => {
      console.log("[Cockpit.js] Cleanup using II useEffect");
    };
  });

  const assignedclasses = [];
  let btnClass = "";

  if (props.showPersons) {
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit); // won't re-render cockpit while persons are re-rendered
