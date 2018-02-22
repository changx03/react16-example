import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  personRefs = [];

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Luke', age: 30 },
    ],
    showPersons: false,
    counter: 0,
  };

  render() {
    const person = this.state.showPersons &&
        this.state.persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onClick={this._deletePersonHandler.bind(this, index)}
            onChange={event => this._nameChangeHandler(event, person.id)}
            position={index}
          >
            <p>{`${person.name} says "Hello" to you!`}</p>
          </Person>
        ));

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
        <button style={styles.button} onClick={this._onCounterClick}>
          Counter {this.state.counter}
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

  _onCounterClick = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  }
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

export default App;
