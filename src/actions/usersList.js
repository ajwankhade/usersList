export const setUsers = (userData = []) => dispatch => {
	dispatch({
		type: 'SET_USERS',
		userData
	})
}

export const setUsersDataLoading = (flag = false) => dispatch => {
	dispatch({
		type: 'SET_USERS_DATA_LOADING',
		flag
	})
}