// This is the preferred coding style (ES6 native)

import React, {Component} from 'react';

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
                <button type="button" onClick={this.handleClick}>Say Hello, Bitch</button>
            </div>
        );
    }
}

export default Greeter;