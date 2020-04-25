const initialState = false

const usersDataLoading = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'SET_USERS_DATA_LOADING':
			return action.flag
		default:
			return state;
	}
};

export default usersDataLoading;