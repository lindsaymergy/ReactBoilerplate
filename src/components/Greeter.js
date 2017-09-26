// This is the preferred coding style (ES6 native)

import React, {Component} from 'react';
import Button from './Button/Button';
//import Example from '../lib/Example';

class Greeter extends Component {
    constructor(){
        super();
        this.state = {
            currentNumber: 0
        };
        
        // Example of injecting greeter into controller for handling things like
        // state, and other methods
        //this.example = new Example(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const next = this.state.currentNumber + 1;
        this.setState({ currentNumber: next });
        //this.example.doStuff();
    }

    render(){
        return(
            <div>
                <div>Dammit, I&#39;ve said hello {this.state.currentNumber} times!!</div>
                <Button click={this.handleClick} text="Say Hello" />
            </div>
        );
    }
}

export default Greeter;