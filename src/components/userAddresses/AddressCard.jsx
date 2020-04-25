import React from 'react';
import './userAddresses.scss';

class AddressCard extends React.Component {

	getAddressFormatted = () => {
		const { address } = this.props;
		return `${address.house_no},\n${address.street_name},\n${address.city_name},\n${address.country}`
	}

	render() {

		return (
			<div
				className="address-card"
				dangerouslySetInnerHTML={{ __html: this.getAddressFormatted() }}
			>
			</div>
		)
	}
}

export default AddressCard;