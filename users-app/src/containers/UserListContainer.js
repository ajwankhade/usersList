import React from 'react';
import { connect } from 'react-redux';
import { FetchUsers } from '../serverCalls/FetchUsers.js';
import UsersList from '../components/usersList/UsersList.jsx';

class UserListContainer extends React.Component {
	componentDidMount() {
		FetchUsers();
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

})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);