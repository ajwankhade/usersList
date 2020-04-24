import axios from "axios";
import {
	setUserAddresses,
	setUserAddressesLoading
} from '../actions/userAddresses.js';
import store from '../store';

export const FetchUserAddresses = (userId) => {
	store.dispatch(setUserAddressesLoading(true));
	axios
		.get(
			`http://demo5472662.mockable.io/user${userId}_addresses`
		)
		.then(({ data }) => {
			store.dispatch(setUserAddresses(userId, data));
		});
}