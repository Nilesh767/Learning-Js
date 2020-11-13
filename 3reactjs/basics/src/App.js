import React, { useState } from 'react';
import './App.css';
import Person from'./Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Nilesh', age: 21 }, 
      { name: 'Other name', age: 20 },
      { name: 'some name', age: 12 }
    ],
    otherstate: 'some other state'
  });

  console.log(personsState);// Proves that ReactHOOKs REPLACES the states instead of UPDATE --> other state missing after update

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS------->       this.state.persons[0].name = 'Nile';
    setPersonsState({
      persons: [
        { name: 'Nile', age: 21 }, 
        { name: 'Other name', age: 20 },
        { name: 'some name', age: 18 }
      ],
      otherstate: personsState.otherstate
    });
  };

  //useState('some other state'); --> other method for using other states

  return (
    <div className="App">
      <h1>Henlo... </h1>
      <p>Working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name= {personsState.persons[0].name} age= {personsState.persons[0].age} />
      <Person name= {personsState.persons[1].name} age= {personsState.persons[1].age} >My hobby: some hobby</Person>
      <Person name= {personsState.persons[2].name} age= {personsState.persons[2].age}  />
    </div>  
  );
}

export default app;

// state = {
//   persons: [
//     { name: 'Nilesh', age: 21 }, 
//     { name: 'Other name', age: 20 },
//     { name: 'some name', age: 12 }
//   ],
//   otherstate: 'some other state'
// };

// switchNameHandler = () => {
//   // console.log('Was clicked');
//   // this.state.persons[0].name = 'Nile';
//   this.setState({
//     persons: [
//       { name: 'Nile', age: 21 }, 
//       { name: 'Other name', age: 20 },
//       { name: 'some name', age: 18 }
//     ]
//   });
// }