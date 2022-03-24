import React, { Component } from 'react';
import calculate from '../../logic/calculate';
import { operators, digits } from '../../components/Calculator';
import { render } from '@testing-library/react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            total: '',
            operation: '',
        }
    }


btnClick = (btn) => {
    this.setState((state) => calculate(
        {
            next: state.next,
            total: state.total,
            operation: state.operation,
        },
        btn,
    ));
}

render() {
    const { total, next } = this.state;
    return (
        <div className="calc-body">
            <div className="calc-screen">
                { next || total || '0' }
            </div>
            <div className="calc-keyboard">
                <div className="calc-digits">{digits.forEach((btn) => <button onClick={ () => this.btnClick(btn)} type="button" key="btn">{ btn }</button>) }
                </div>
                <div className="calc-operators">
                    { operators.forEach((item) => <button onClick={() => this.btnClick(btn)} type="button" key={btn}>{ btn } </button>)}
                </div>
            </div>
        </div>
    )
}
}

export default Calculator;