// This is the preferred coding style (ES6 native)

import React, {Component} from 'react';
import Button from './Button';

class Greeter extends Component {
    constructor(){
        super();
        this.state = {
            currentNumber: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        var next = this.state.currentNumber + 1;
        this.setState({ currentNumber: next });
    }

    render(){
        return(
            <div>
                <div>I've said hello {this.state.currentNumber} times!!</div>
                <Button click={this.handleClick} text="Say Hello" />
            </div>
        );
    }
}

export default Greeter;