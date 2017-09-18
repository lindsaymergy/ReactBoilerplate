import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
        this.onHandleClick = props.click;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.onHandleClick();
    }

    render() {
        return( 
            <button onClick={this.handleClick} type="button">{this.state.text}</button>
        );
    }
}

export default Button;