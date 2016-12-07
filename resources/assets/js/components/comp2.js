import React, { Component } from 'react';
import { Link } from 'react-router';

class AddTodo extends Component {
	render() {
		return (
			<div>
				<Link to={{ pathname: '/comp1'}}> comp2 -> comp1</Link>
			</div>
		);
	}
}

export default AddTodo;