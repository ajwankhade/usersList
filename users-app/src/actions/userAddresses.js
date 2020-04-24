export const setUserAddresses = (userId, userAddresses = []) => dispatch => {
	dispatch({
		type: 'SET_USER_ADDRESSES',
		userAddresses,
		userId
	})
}

export const setUserAddressesLoading = (flag = false) => dispatch => {
	dispatch({
		type: 'SET_USER_ADDRESSES_LOADING',
		flag
	})
}