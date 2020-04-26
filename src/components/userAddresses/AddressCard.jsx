import React from 'react';
import './userAddresses.scss';

const AddressCard = ({ address }) => {
	return (
		<div className="address-card">
			<p>{address.house_no}</p>
			<p>{address.street_name}</p>
			<p>{address.city_name}</p>
			<p>{address.country}</p>
		</div>
	)
}

export default AddressCard