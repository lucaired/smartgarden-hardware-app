import React from 'react';
import fan from '../fan.svg';
import './Button.css'

function Button() {
  return (
      <img src={fan} className="Fan" alt="fan" />
  );
}

export default Button;
