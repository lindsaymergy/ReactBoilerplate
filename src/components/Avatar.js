// This is an alternative coding style for react which uses object notation. (less than ideal)
// This approach is being deprecated and should not be used.

import React, {Component} from 'react';

class Avatar extends Component {
	constructor(props){
		super(props);
		this.state = {
			"alt": props.alt,
			"user": props.user
		}
	}

	render() {
		return (
			<img
				src={this.getPhotoUrl()}
				alt={this.state.alt}
				width={150}
				height={150}
				className="commentPhoto widget" />
		);
	}

	getPhotoUrl() {
		return 'https://avatars.githubusercontent.com/' + this.state.user + '?s=150';
	}
};

export default Avatar;