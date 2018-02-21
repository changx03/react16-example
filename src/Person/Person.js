import React from 'react';
import Radium from 'radium';
import './Person.css';

// functions are stateless
const person = props => {
  const { name, age, children, onChange } = props;
  return (
    <div className="card" style={style}>
      <h2 onClick={props.onClick}>{name}</h2>
      <p>{`Age: ${age}`}</p>
      <input type="text" onChange={onChange} value={name} />
      {children}
    </div>
  );
};

const style = {
  '@media (min-width: 500px)': {
    width: '450px',
  }
};

export default Radium(person);
