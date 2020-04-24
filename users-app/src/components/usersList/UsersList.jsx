import React from 'react';

class UsersList extends React.Component {

	render() {
		const { users, userDataLoading } = this.props;

		if (userDataLoading) {
			return <div>Loading users...</div>
		}

		if (users.length === 0) {
			return <div>There are no users available</div>
		}

		return (
			users.map(user => {
				return (
					<div key={`user_${user.id}`} onClick={() => this.props.setSelectedUser(user.id)}>
						<span>{user.id}</span>
						<span>{user.name}</span>
						<span>{user.age}</span>
						<span>{user.gender}</span>
					</div>
				)
			})
		)
	}
}

export default UsersList;