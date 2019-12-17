import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (  
      <div className="App">
        <h1>Hi I am a React App</h1>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29"></Person>
        <Person name="Stephanie" age="26"></Person>
      </div>
    );
  //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am a React App!!!'));
  }
}

export default App;
