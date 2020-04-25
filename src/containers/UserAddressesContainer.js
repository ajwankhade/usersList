import React from 'react';
import { FetchUserAddresses } from '../serverCalls/FetchUserAddresses.js';
import { connect } from 'react-redux';
import UserAddresses from '../components/userAddresses/UserAddresses.jsx';

class UserAddressesContainer extends React.Component {

	componentDidMount() {
		if (this.props.userAddress.length === 0)
			this.props.fetchUserAddresses(this.props.selectedUserId)
	}

	render() {
		return <UserAddresses {...this.props} />
	}
}

const getUserAddress = (addresses, userId) => {
	if (!addresses) return [];
	return addresses[userId] || [];
}

const mapStateToProps = (state, ownProps) => {
	return {
		userAddress: getUserAddress(state.userAddressesData.userAddresses, ownProps.selectedUserId),
		userAddressesLoading: state.userAddressesData.userAddressesLoading
	}
}
const mapDispatchToProps = dispatch => ({
	fetchUserAddresses: (userId) => dispatch(FetchUserAddresses(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressesContainer);