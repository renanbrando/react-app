import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';
import  UserInput from "./User/UserInput";
import  UserOutput from "./User/UserOutput";
//import PersonC from './Person/PersonComponent';

class App extends Component {
  state = {
    persons: [
      { name: "Renan", age: 25 },
      { name: "Paty", age: 29 },
      { name: "Max", age: 29 },
      { name: "Manu", age: 28 },
    ],
    name: "Renan"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Paty", age: 29 },
        { name: "Max", age: 23 },
        { name: "Manu", age: 28 },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Renan", age: 25 },
        { name: "Paty", age: 29 },
        { name: event.target.value, age: 23 },
        { name: "Manu", age: 28 },
      ]
    });
  }

  userInputHandler = (event) => {
    this.setState({name: event.target.value});
  }

  userInputReset = () => {
    this.setState({name: "Renan"});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button style={style} onClick={() => this.switchNameHandler('Jotaro')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.nameChangeHandler.bind(this, "Jotaro!")} changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <hr/>
        <div className="container">
          <UserInput name={this.state.name} changed={this.userInputHandler}/>
          <UserOutput name={this.state.name}/>
          <button style={style} onClick={this.userInputReset}>Reset Name</button>
        </div>
      </div>
    );
  }
}

export default App;

/*Functional Component
const app = props => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Renan", age: 25 },
      { name: "Paty", age: 29 },
      { name: "Max", age: 29 },
      { name: "Manu", age: 28 },
    ]
  });

  const switchNameHandler = () => {
    console.log('Was clicked!');
    setPersons({
      persons: [
        { name: "Rena", age: 25 },
        { name: "Paty", age: 29 },
        { name: "Max", age: 23 },
        { name: "Manu", age: 28 },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
      {<PersonC name="Renan" age="25"/>}
    </div>
  );
}

export default app;
*/