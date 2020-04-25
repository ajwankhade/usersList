const initialState = {
	userAddresses: {},
	userAddressesLoading: false
}

const userAddressesData = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'SET_USER_ADDRESSES':
			return {
				...state,
				userAddresses: {
					...state.userAddresses,
					[action.userId]: action.userAddresses
				},
				userAddressesLoading: false
			}
		case 'SET_USER_ADDRESSES_LOADING':
			return {
				...state,
				userAddressesLoading: action.flag
			}
		default:
			return state;
	}
};

export default userAddressesData;