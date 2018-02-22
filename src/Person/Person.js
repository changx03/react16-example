import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.css';

// functions are stateless
export default class Person extends Component {
  inputRef;

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputRef.focus();
    }
  }

  render() {
    const { name, age, children, onChange, onClick } = this.props;
    return (
      <div className="card">
        <h2 onClick={onClick}>{name}</h2>
        <p>{`Age: ${age}`}</p>
        <input
          type="text"
          onChange={onChange}
          value={name}
          ref={ref => (this.inputRef = ref)}
        />
        {children}
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  position: PropTypes.number,
};
