import React, { Component } from 'react';

class TodoList extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default TodoList;