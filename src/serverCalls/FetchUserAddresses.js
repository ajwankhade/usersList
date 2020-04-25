import axios from "axios";
import {
	setUserAddresses,
	setUserAddressesLoading
} from '../actions/userAddresses.js';

export const FetchUserAddresses = (userId) => dispatch => {
	dispatch(setUserAddressesLoading(true));
	axios
		.get(
			`http://demo5472662.mockable.io/user${userId}_addresses`
		)
		.then(({ data }) => {
			dispatch(setUserAddresses(userId, data));
		});
}