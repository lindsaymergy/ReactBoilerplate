import React, { Component } from 'react';
import Style from "./calculator.css";

export default class Calculator extends Component {

    render() {
        return (
            <div className={[Style.big, Style.black].join(' ')}>Hello World!</div>
        );
    }
}