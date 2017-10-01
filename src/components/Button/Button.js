import React, {Component} from 'react';
import './styles/button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
        this.onHandleClick = props.click;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.onHandleClick();
    }

    render() {
        return(
            <div>
                <button
                    className="button" 
                    onClick={this.handleClick} 
                    type="button">{this.props.text}</button>
            </div>
        );
    }
}

export default Button;