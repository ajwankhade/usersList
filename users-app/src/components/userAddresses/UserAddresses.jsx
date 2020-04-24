import React from 'react';

class UserAddresses extends React.Component {

	render() {
		if (!this.props.selectedUserId) return null;
		if (this.props.userAddressesLoading) return <div>Loading address...</div>
		return <div>User Id {this.props.selectedUserId}'s Address</div>;
	}
}

export default UserAddresses;