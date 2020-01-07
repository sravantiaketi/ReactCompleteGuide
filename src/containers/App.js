import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
   super(props);
   console.log('App js constructor');
  }
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28 },
      {id: 2, name: 'Manu', age: 29 },
      {id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id) => {
    console.log(id);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    person.name = event.target.value;
    this.setState( {
      persons: persons
    } )
  }

  deletePersonHandler = (personIndex) => {
   const persons = this.state.persons.slice();
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
          persons = {this.state.persons}
           clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />       
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'lightred',
        color: 'black'
      }
    }

    return (
      <div className="App">
        <Cockpit title={this.props.appTitle}
        persons = {this.state.persons} 
        clicked = {this.togglePersonsHandler}/>        
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
