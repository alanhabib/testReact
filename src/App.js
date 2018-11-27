import React, { Component } from 'react';
import './App.css';
import Person from "./Component/Person";


class App extends Component {

  state = {
    persons: [
      {
        name: "Alexander", age: 76, id: "April",
      },
      {
        name: "Magnus", age: 43, id: "Maj",
      },
      {
        name: "Ranelid", age: 83, id: "Juni",
      },

    ],
    showPersons: false,
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    // setState takes an object as an argument 
    // and it will merge everything in it with the state above
    this.setState({ showPersons: !doesShow })
  }

  inputChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }


  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.inputChangeHandler(event, person.id)} />
          })}
        </div>

      )
      style.backgroundColor = "salmon";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello there this is React</h1>
        <p className={classes.join(" ")}>Let start learning</p>
        <button
          style={style}
          onClick={this.toggleHandler}>
          Toggle names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
