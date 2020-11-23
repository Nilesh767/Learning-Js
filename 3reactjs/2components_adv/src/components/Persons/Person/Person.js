import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('4.[Person.js] rendoring...')
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and i am {props.age}yo! </p>
            <p> {props.children} </p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
