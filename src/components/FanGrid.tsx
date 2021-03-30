import React from 'react';
import Button from "./Button";
import './FanGrid.css';

function FanGrid() {
  return (
      <div className="fan__grid__wrapper">
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
  );
}

export default FanGrid;
