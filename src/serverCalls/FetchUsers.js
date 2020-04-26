import axios from "axios";
import {
	setUsers,
	setUsersDataLoading
} from '../actions/usersList.js';

export const FetchUsers = () => dispatch => {
	dispatch(setUsersDataLoading(true));
	return axios
		.get(
			"https://demo5472662.mockable.io/users"
		)
		.then(({ data }) => {
			dispatch(setUsers(data));
			dispatch(setUsersDataLoading(false));
		})
		.catch(() => {
			console.log("error while fetching users");
		});
}