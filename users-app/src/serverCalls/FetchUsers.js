import axios from "axios";
import {
	setUsers,
	setUsersDataLoading
} from '../actions/usersList.js';
import store from '../store';

export const FetchUsers = () => {
	store.dispatch(setUsersDataLoading(true));
	return axios
		.get(
			"http://demo5472662.mockable.io/users"
		)
		.then(({ data }) => {
			store.dispatch(setUsers(data));
			store.dispatch(setUsersDataLoading(false));
		})
		.catch(() => {
			console.log("error while fetching users");
		});
}