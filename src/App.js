import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: "Derek", age: 36 },
      { name: "Emily", age: 31 },
      { name: "Shannon", age: 40 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DONT DO THIS ---> this.state.persons[0] = "Ronald";
    this.setState({
      persons: [
        { name: newName, age: 80 },
        { name: "Victoria", age: 28 },
        { name: "Shannon", age: 40 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Derek", age: 80 },
        { name: event.target.value, age: 28 },
        { name: "Shannon", age: 40 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={() => this.switchNameHandler('Thomas')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}> My hobby: tech </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Tom!!')}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />        
      </div>
    );
  }
}

export default App;