import React from 'react';

export default class SwitchButton extends React.Component {
  state = {
    isToggleOn: false,
  };
  render() {
    return (
      <button className="button-custom" onClick={this._onClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

  // You don't need bind(this) with arrow function. 
  // https://reactjs.org/docs/handling-events.html
  _onClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
}
