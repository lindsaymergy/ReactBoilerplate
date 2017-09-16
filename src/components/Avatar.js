var React = require('react');

var Avatar = React.createClass({
	render() {
		return (
			<img
				src={this.getPhotoUrl()}
				alt={'Photo of David'}
				width={50}
				height={50}
				className="commentPhoto"
			/>
		);
	},
	getPhotoUrl() {
		return 'https://avatars.githubusercontent.com/dfederspiel?s=50';
	}
});

export default Avatar;