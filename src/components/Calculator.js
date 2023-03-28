import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>
      <Keypad />
    </div>
  );
}

function Keypad() {
  return (
    <div className="keypad">
      <div className="row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="colorOrange">÷</button>
      </div>
      <div className="row">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="colorOrange">×</button>
      </div>
      <div className="row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="colorOrange">-</button>
      </div>
      <div className="row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="colorOrange">+</button>
      </div>
      <div className="row lastRow">
        <button type="button" className="lastRow0">0</button>
        <button type="button">.</button>
        <button type="button" className="colorOrange">=</button>
      </div>
    </div>
  );
}

export default Calculator;
