import React from 'react';
import './styles.scss';
import UserRow from './UserRow';

class UsersList extends React.Component {

	getUsersContent = () => {
		const { users, selectedUserId, userDataLoading } = this.props;

		if (userDataLoading) {
			return <div className="users-list-container">Loading users...</div>
		}

		if (users.length === 0) {
			return <div className="users-list-container">There are no users available</div>
		}

		let usersList = users.map(user => {
			return <UserRow
				key={`user_${user.id}`}
				user={user}
				setSelectedUser={this.props.setSelectedUser}
				isSelected={selectedUserId === user.id}
			/>
		})

		return (
			<div className="users">
				<div className="user-row-header">
					<div>User ID</div>
					<div>User Name</div>
					<div>User Age</div>
					<div>Gender</div>
				</div>
				{usersList}
			</div>
		)
	}

	render() {

		return (
			<div className="users-list-container">
				<h2 className="container-header">Users</h2>
				{this.getUsersContent()}
			</div>
		)
	}
}

export default UsersList;