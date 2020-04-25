import React from 'react';
import { FetchUserAddresses } from '../serverCalls/FetchUserAddresses.js';
import { connect } from 'react-redux';
import UserAddresses from '../components/userAddresses/UserAddresses.jsx';

class UserAddressesContainer extends React.Component {

	fetchUserData = (userId) => {
		this.props.fetchUserAddresses(userId)
	}

	componentDidMount() {
		if (this.props.selectedUserId && !this.props.userAddresses[this.props.selectedUserId])
			this.fetchUserData(this.props.selectedUserId)
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
	fetchUserAddresses: (userId) => dispatch(FetchUserAddresses(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressesContainer);