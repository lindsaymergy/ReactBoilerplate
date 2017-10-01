// This is the preferred coding style (ES6 native)

import React, {Component} from 'react';
import Button from './Button/Button';
import '../styles/greeter.css';

class Greeter extends Component {
    constructor(){
        super();
        this.state = {
            currentNumber: 0
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const next = this.state.currentNumber + 1;
        this.setState({ currentNumber: next });
    }

    getEmphaticPre(){
        if(this.state.currentNumber < 5){
            return 'Hello, ';
        } else if (this.state.currentNumber < 10){
            return 'Hey, ';
        } else {
            return 'Dang it!, ';
        }
    }

    getEmphaticPost(){
        if(this.state.currentNumber < 5){
            return '.';
        } else if (this.state.currentNumber < 10){
            return '!';
        } else {
            return '!!!!!';
        }
    }

    render(){
        return(
            <div className="greeter">
                <div>{this.getEmphaticPre()}I&#39;ve said hello {this.state.currentNumber} times{this.getEmphaticPost()}</div>
                <Button click={this.handleClick} text="Say Hello" />
            </div>
        );
    }
}

export default Greeter;