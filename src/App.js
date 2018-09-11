import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Derek", age: 36 },
      { name: "Emily", age: 31 },
      { name: "Shannon", age: 40 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DONT DO THIS ---> this.state.persons[0] = "Ronald";
    this.setState( {
      persons: [
        { name: newName, age: 80 },
        { name: "Victoria", age: 28 },
        { name: "Shannon", age: 40 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Derek", age: 80 },
        { name: event.target.value, age: 28 },
        { name: "Shannon", age: 40 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}    
      </div>
    );
  }
}

export default App;