import React from 'react';
import './styles.scss';

class UserRow extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div
				className={`user-row${this.props.isSelected ? ' selected' : ''}`}
				key={`user_${user.id}`}
				onClick={() => this.props.setSelectedUser(user.id, user)}
			>
				<div>{user.id}</div>
				<div>{user.name}</div>
				<div>{user.age}</div>
				<div>{user.gender}</div>
			</div>
		)
	}
}

export default UserRow;