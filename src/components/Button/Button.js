import React, {Component} from 'react';
import './styles/button.scss';

class Button extends Component {
    constructor(props) {
        super(props);

        this.defaultText = 'Yo! You forgot to add text!';

        this.state = {
            text: props.text === undefined ? this.defaultText : props.text
        };
        this.onHandleClick = props.click;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.onHandleClick !== undefined)
            this.onHandleClick();
    }

    render() {
        return(
            <div>
                <button
                    className="button" 
                    onClick={this.handleClick} 
                    type="button">{this.props.text === undefined ? this.defaultText : this.props.text}</button>
            </div>
        );
    }
}

export default Button;