const initialState = []

const users = (state = initialState, action = {}) => {
	console.log('action', action)
	switch (action.type) {
		case 'SET_USERS':
			return action.userData
		default:
			return state;
	}
};

export default users;