import React from 'react';
import './userAddresses.scss';
import AddressCard from './AddressCard';

class UserAddresses extends React.Component {

	getAddressCards = () => {
		const {
			selectedUser,
			userAddress,
			userAddressesLoading
		} = this.props;

		if (userAddressesLoading)
			return <div className="address-container">Loading address...</div>

		if (userAddress.length === 0)
			return <div className="address-container">No addresses for this user!</div>


		return userAddress.map(address => {
			return <AddressCard
				key={`address_${address.address_id}_user_${selectedUser.id}`}
				address={address}
			/>
		});
	}

	render() {
		const { selectedUser } = this.props;

		return (
			<div className="address-container">
				<h2 className="header-text">
					{selectedUser.name}'s Addresses
				</h2>
				<div className="address-cards-container">
					{this.getAddressCards()}
				</div>
			</div>
		);
	}
}

export default UserAddresses;