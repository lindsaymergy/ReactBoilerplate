import React, {Component} from 'react';
import '../styles/avatar.css';

class Avatar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'alt': props.alt,
            'user': props.user
        };
    }

    render() {
        return (
            <div className="avatar">
                <span>{this.state.user}</span>
                <a href={'https://github.com/' + this.state.user}>
                    <img
                        src={this.getPhotoUrl()}
                        alt={this.state.alt}
                        width={100}
                        height={100}
                        className="commentPhoto widget" /><br />
                </a>
            </div>
        );
    }

    getPhotoUrl() {
        return 'https://avatars.githubusercontent.com/' + this.state.user + '?s=100';
    }
}

export default Avatar;