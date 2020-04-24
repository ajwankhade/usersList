import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { setUsers } from '../actions/usersList.js';

class UserListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			userDataLoading: false
		}
	}

	componentDidMount() {
		this.setState({
			userDataLoading: true
		}, () => {
			axios
				.get(
					"http://demo5472662.mockable.io/users"
				)
				.then(({ data }) => {
					this.props.setUsers(data);
					this.setState({
						users: data,
						userDataLoading: false
					})
				});
		})
	}

	render() {
		const { users, userDataLoading } = this.state;
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

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	setUsers: (users = []) => dispatch(setUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);