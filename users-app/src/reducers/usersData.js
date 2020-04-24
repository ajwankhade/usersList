import { combineReducers } from 'redux';
import users from './users';
import usersDataLoading from './usersDataLoading';

const usersData = combineReducers({
	users,
	usersDataLoading
});

export default usersData;