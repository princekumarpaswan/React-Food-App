import React from 'react';

class UserClass extends React.Component {
	// props in class based component
	constructor(props) {
		super(props);

		// Creating state variable on the class based component
		this.state = {
			userInfo: {
				name: 'Dummy',
				location: 'Data',
			},
		};
	}

	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/VidyaSagarMehar');
		const json = await data.json();

		this.setState({
			userInfo: json,
		});

		console.log(json);
	}

	render() {
		// destructuring
		const { name, location, avatar_url } = this.state.userInfo;
		return (
			<div className="user-card">
				<img src={avatar_url} />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: vidyasagark890@gmail.com</h4>
			</div>
		);
	}
}

export default UserClass;
