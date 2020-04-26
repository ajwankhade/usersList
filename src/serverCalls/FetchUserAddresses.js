import axios from "axios";
import {
	setUserAddresses,
	setUserAddressesLoading
} from '../actions/userAddresses.js';
import { logThis } from '../utils/loggerUtil';

export const FetchUserAddresses = (userId) => dispatch => {
	dispatch(setUserAddressesLoading(true));
	logThis("Calling fetch addresses for a user")
	axios
		.get(
			`https://demo5472662.mockable.io/user${userId}_addresses`
		)
		.then(({ data }) => {
			dispatch(setUserAddresses(userId, data));
			logThis("User addresses fetched successfully", data);
		})
		.catch(() => {
			logThis("Error fetching user addresses");
		});
}