import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Luke', age: 30 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>My react app</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          <h3>My hobbies: Racing</h3>
        </Person>
        <Person
          name={this.state.persons[2].name}
          onClick={this._switchNameHandler.bind(this, 'Maximum')}
          age={this.state.persons[2].age}
        />
        <button onClick={this._switchNameHandler.bind(this, 'Max!')}>Switch name</button>
      </div>
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, "I'm a react app!")
      // )
    );
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
}

export default App;
