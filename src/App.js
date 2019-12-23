import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons : [
      {name: 'Max1',age: 28},
      {name: 'Manu',age: 29},
      {name: 'Stephanie',age: 26}
    ],
    otherState : 'Some other value'
  });

  const  switchNameHandler = () => {
    setPersonsState({
      persons : [
        {name: 'Maximilian',age: 28},
        {name: 'Manu',age: 29},
        {name: 'Stephanie',age: 29}
      ]
    });
  }

  const nameChangedHandler =  (event) => {
    setPersonsState({
      persons : [
        {name: 'Maximilian',age: 28},
        {name: event.target.value,age: 29},
        {name: 'Stephanie',age: 29}
      ]
    });
  }
 
    return (  
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name}  
        age={personsState.persons[1].age} 
        changed={nameChangedHandler}>My Hobbies</Person>
        <Person name={personsState.persons[2].name}  age={personsState.persons[2].age} ></Person>
      </div>
    );
  //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am a React App!!!'));
  
} 
export default app;

 
