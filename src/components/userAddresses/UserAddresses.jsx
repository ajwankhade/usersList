import React from 'react';
import './userAddresses.scss';
import AddressCard from './AddressCard';

class UserAddresses extends React.Component {

	getAddressCards = () => {
		const {
			selectedUserId,
			userAddresses,
			userAddressesLoading
		} = this.props;

		if (userAddressesLoading)
			return <div className="address-container">Loading address...</div>

		const selectedUserAddresses = userAddresses[selectedUserId];

		if (selectedUserAddresses && selectedUserAddresses.length === 0)
			return <div className="address-container">No addresses for this user!</div>

		let userAddressesComponent = [];

		if (selectedUserAddresses)
			userAddressesComponent = selectedUserAddresses.map(address => {
				return <AddressCard
					key={`address_${address.address_id}_user_${selectedUserId}`}
					address={address}
				/>
			})

		return (
			<div className="address-cards-container">
				{userAddressesComponent}
			</div>
		);
	}

	render() {
		const { selectedUser, selectedUserId } = this.props;
		if (!selectedUserId)
			return (
				<div className="address-container">
					<h2 className="header-text">
						No user selected
				</h2>
				</div>
			);

		return (
			<div className="address-container">
				<h2 className="header-text">
					{selectedUser.name}'s Address
				</h2>
				{this.getAddressCards()}
			</div>
		);
	}
}

export default UserAddresses;