import React, {Component} from 'react';
import '../styles/nametag.css';

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div className="red big">Im {this.state.name}, bitch</div>
        );
    }
}

export default NameTag;