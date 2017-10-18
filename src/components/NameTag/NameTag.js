import React, {Component} from 'react';
import './nametag.scss';

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div className={this.props.myClasses}>Im {this.state.name}, bitch!</div>
        );
    }
}

export default NameTag;