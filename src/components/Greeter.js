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
                <div>I've Said Hello {this.state.currentNumber} Times.</div>
                <Button click={this.handleClick} text="Say Hello Biotch" />
            </div>
        );
    }
}

export default Greeter;