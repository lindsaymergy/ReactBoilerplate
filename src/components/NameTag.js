import React, {Component} from 'react';
import Style from './nametag.css'

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <div className="red">Hello, my name is {this.state.name}</div>
        );
    }
};

export default NameTag;