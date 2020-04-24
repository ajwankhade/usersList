import { combineReducers } from 'redux';
import usersData from './usersData';
import userAddressesData from './userAddressesData';

export default combineReducers({
	usersData,
	userAddressesData
});