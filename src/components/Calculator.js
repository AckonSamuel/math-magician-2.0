import React, { Component } from 'react';
import Button from './ButtonSkeleton';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <h1 className="calc-input">0</h1>
        <div className="calc-keys">
          <Button buttons={digits} />
          <Button buttons={operators} />
        </div>
      </div>
    );
  }
}

export default Calculator;
