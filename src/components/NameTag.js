import React, {Component} from 'react';
import '../styles/nametag.scss';

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div className={this.props.myClasses}>Im {this.state.name}, dude!</div>
        );
    }
}

export default NameTag;