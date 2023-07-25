import React from 'react';

class UserClass extends React.Component {
	// props in class based component
	constructor(props) {
		super(props);

		// Creating state variable on the class based component
		this.state = {
			count: 0,
			// second state variable in class componet
			count2: 2,
		};
	}

	render() {
		// destructuring the props
		const { name, location } = this.props;
		const { count, count2 } = this.state;
		return (
			<div className="user-card">
				<h1>count: {count}</h1>
				<button
					onClick={() => {
						// NEVER UPDATE THE VARIABLE DIRECLTY
						// Right way below
						this.setState({
							count: this.state.count + 1,
							count2: this.state.count2 + 1,
						});
					}}
				>
					+
				</button>
				<h1>count 2: {count2}</h1>
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: vidyasagark890@gmail.com</h4>
			</div>
		);
	}
}

export default UserClass;
