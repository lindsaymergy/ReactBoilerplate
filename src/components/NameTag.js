import React, {Component} from 'react';
import Style from './styles/nametag.css'

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <div className="red">I'm {this.state.name}, bitch.</div>
        );
    }
};

export default NameTag;