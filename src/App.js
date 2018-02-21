import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Luke', age: 30 },
    ],
    showPersons: false,
  };

  render() {
    let btnClass = '';
    let person;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              onClick={this._deletePersonHandler.bind(this, index)}
              onChange={event => this._nameChangeHandler(event, person.id)}
            >
              <p>{`${person.name} says "Hello" to you!`}</p>
            </Person>
          ))}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.color);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.shadow);
    }

    return (
      <div className={classes.App}>
        <h1>My react app</h1>
        <p className={assignedClasses.join(' ')}>This is an indicator </p>
        <button className={btnClass} onClick={this._onToggleBtnClick}>
          Toggle switch
        </button>
        {person}
      </div>
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, "I'm a react app!")
      // )
    );
  }

  _onToggleBtnClick = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons,
    }));
  };

  _deletePersonHandler = index => {
    // Don't use pointer, create a deep copy instead
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };

  _nameChangeHandler = (event, id) => {
    const idx = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[idx].name = event.target.value;
    this.setState({
      persons: persons,
    });
  };
}

export default App;
