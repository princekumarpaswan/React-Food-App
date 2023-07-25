import React from 'react';

class UserClass extends React.Component {
	// props in class based component
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		// destructuring the props
		const { name, location } = this.props;
		return (
			<div className="user-card">
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: vidyasagark890@gmail.com</h4>
			</div>
		);
	}
}

export default UserClass;
