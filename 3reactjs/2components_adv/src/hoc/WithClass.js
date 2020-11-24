import React from 'react';

const withClass = props => (
    <div className={props.classes}>
        {props.children} 
    </div>
);

//high order component(hoc) may or may not serve a purpose(logic) 
//div --> creates a div which take a property classes
// props.Children --> part of data inside this resides in there
export default withClass;