import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Luke', age: 30 },
    ],
    showPersons: false,
  };

  render() {
    const person =  this.state.showPersons &&
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        onChange={this._nameChangeHandler}
      >
        <h3>My hobbies: Racing</h3>
      </Person>
      <Person
        name={this.state.persons[2].name}
        onClick={this._switchNameHandler.bind(this, 'Maximum')}
        age={this.state.persons[2].age}
      />
    </div>;

    // .bind(this, ...args) is used to pass arguments to event handler
    // 'this' is always defined in the arrow function
    return (
      <div className="App">
        <h1>My react app</h1>
        <SwitchButton />
        <button className="button-custom" onClick={this._onToggleBtnClick}>Toggle switch</button>
        <button className="button-custom" onClick={this._switchNameHandler.bind(this, 'Max!')}>Switch name</button>
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
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  _switchNameHandler = (nextName) => {
    console.log('Click!');
    this.setState({
      persons: [
        { name: nextName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Luker', age: 31 },
      ],
    });
  };

  _nameChangeHandler = e => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 29 },
        { name: 'Luker', age: 31 },
      ],
    });
  }
}

export default App;
