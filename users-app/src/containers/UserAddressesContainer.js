import React from 'react';
import axios from "axios";

class UserAddressesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userAddresses: {},
			loadingAddress: false
		}
	}

	fetchUserData = (userId) => {
		axios
			.get(
				`http://demo5472662.mockable.io/user${userId}_addresses`
			)
			.then(({ data }) => {
				this.setState({
					userAddresses: {
						...this.state.userAddresses,
						[userId]: data
					},
					loadingAddress: false
				})
			});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.selectedUserId !== nextProps.selectedUserId)
			this.setState({
				loadingAddress: true
			}, () => {
				if (this.state.userAddresses[this.props.selectedUserId] === undefined)
					this.fetchUserData(nextProps.selectedUserId)
				else
					this.setState({ loadingAddress: false })
			})
	}

	render() {
		if (!this.props.selectedUserId) return null;
		if (this.state.loadingAddress) return <div>Loading address...</div>
		return <div>User Id {this.props.selectedUserId}'s Address</div>;
	}
}

export default UserAddressesContainer;