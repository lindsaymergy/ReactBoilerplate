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
			<div>
				<img
					src={this.getPhotoUrl()}
					alt={this.state.alt}
					width={200}
					height={200}
					className="commentPhoto widget" /><br />
				<a href={'https://github.com/' + this.state.user}>{this.state.user}</a>
			</div>
			
		);
	}

	getPhotoUrl() {
		return 'https://avatars.githubusercontent.com/' + this.state.user + '?s=150';
	}
};

export default Avatar;