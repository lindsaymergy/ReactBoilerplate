import React, {Component} from 'react';
import Style from './nametag.css'

class NameTag extends Component {

    render() {
        return (
            <div className={[this.props.class, Style.big, Style.black].join(' ')}>Hello {this.props.name}</div>
        );
    }
};

export default NameTag;