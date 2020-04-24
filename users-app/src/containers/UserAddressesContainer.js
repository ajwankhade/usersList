import React from 'react';
import { FetchUserAddresses } from '../serverCalls/FetchUserAddresses.js';
import { connect } from 'react-redux';
import UserAddresses from '../components/userAddresses/UserAddresses.jsx';

class UserAddressesContainer extends React.Component {

	fetchUserData = (userId) => {
		FetchUserAddresses(userId)
	}

	componentWillReceiveProps(nextProps) {
		if (
			this.props.selectedUserId !== nextProps.selectedUserId
			&& this.props.userAddresses[nextProps.selectedUserId] === undefined
		)
			this.fetchUserData(nextProps.selectedUserId)
	}

	render() {
		return <UserAddresses {...this.props} />
	}
}

const mapStateToProps = state => ({
	userAddresses: state.userAddressesData.userAddresses,
	userAddressesLoading: state.userAddressesData.userAddressesLoading
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressesContainer);