import React from 'react';
// import { shallow } from 'enzyme';
import { UserListContainer } from './UserListContainer'
import { shallow } from 'enzyme';

describe('UserListContainer ', () => {

	const mockProps = (props = {}) => ({
		users: [],
		userDataLoading: false,
		fetchUsers: jest.fn()
	});

	it("should fetch users", () => {
		const props = mockProps();
		shallow(<UserListContainer {...props} />);
		expect(props.fetchUsers.mock.calls.length).toBe(1);
		expect(props.fetchUsers.mock.calls[0][0]).toBe(undefined);
	})
})