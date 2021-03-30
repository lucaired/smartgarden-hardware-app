import React from 'react';
import fan from '../fan.svg';
import './Button.css'

function Button() {
  return (
      <div className="fan__wrapper">
        <img src={fan} className="Fan" alt="fan" />
        <div className="fan__schedule">
          <h2>Schedule </h2><p>every 30 min</p>
        </div>
      </div>
  );
}

export default Button;
