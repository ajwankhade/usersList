export const setUsers = (userData = []) => dispatch => {
	console.log('userData', userData)
	dispatch({
		type: 'SET_USERS',
		userData
	})
}