import React from 'react';

// functions are stateless
const person = props => {
  const { name, age, children, onChange } = props;
  return (
    <div>
      <h2 onClick={props.onClick}>{name}</h2>
      <p>{`Age: ${age}`}</p>
      <p>You have to prove you are not a machine to a machine!</p>
      <input type="text" onChange={onChange} value={name} />
      {children}
    </div>
  );
};

export default person;
