import React from 'react';
import classes from './Person.css';

// functions are stateless
const person = props => {
  const { name, age, children, onChange } = props;
  return (
    <div className={classes.card}>
      <h2 onClick={props.onClick}>{name}</h2>
      <p>{`Age: ${age}`}</p>
      <input type="text" onChange={onChange} value={name} />
      {children}
    </div>
  );
};

export default person;
