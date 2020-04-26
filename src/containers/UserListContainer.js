import React from 'react';
import { connect } from 'react-redux';
import { FetchUsers } from '../serverCalls/FetchUsers.js';
import UsersList from '../components/usersList/UsersList.jsx';

export class UserListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return <UsersList {...this.props} />
	}
}

const mapStateToProps = state => ({
	users: state.usersData.users,
	userDataLoading: state.usersData.usersDataLoading
})

const mapDispatchToProps = dispatch => ({
	fetchUsers: () => dispatch(FetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);