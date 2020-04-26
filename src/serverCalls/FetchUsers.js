import axios from "axios";
import {
	setUsers,
	setUsersDataLoading
} from '../actions/usersList.js';
import { logThis } from '../utils/loggerUtil';

export const FetchUsers = () => dispatch => {
	dispatch(setUsersDataLoading(true));
	logThis("Calling fetch users");
	return axios
		.get(
			"https://demo5472662.mockable.io/users"
		)
		.then(({ data }) => {
			dispatch(setUsers(data));
			dispatch(setUsersDataLoading(false));
			logThis("Fetched users successfully");
		})
		.catch(() => {
			logThis("Error fetching users");
			console.log("error while fetching users");
		});
}