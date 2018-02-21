import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
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
    const person = this.state.showPersons && (
      <StyleRoot>
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
      </StyleRoot>
    );

    const classes = []; // ['red', 'bold'].join(' ');
    if (this.state.persons.length <= 2) {
      classes.push('color');
    }
    if (this.state.persons.length <= 1) {
      classes.push('shadow');
    }

    // .bind(this, ...args) is used to pass arguments to event handler
    // 'this' is always defined in the arrow function
    return (
      <div className="App">
        <h1>My react app</h1>
        <p className={classes.join(' ')}>This is an indicator </p>
        <button style={styles.button} onClick={this._onToggleBtnClick}>
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

const styles = {
  button: {
    width: 200,
    height: 40,
    background: 'white',
    border: '1px solid #b3e5fc',
    borderRadius: 4,
    margin: 8,
    cursor: 'pointer',
    ':hover': {
      background: 'lightgreen',
      color: 'black'
    }
  },
};

export default Radium(App);
