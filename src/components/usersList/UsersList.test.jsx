import React from 'react';
import UsersList from './UsersList';
import UserRow from './UserRow';
import { shallow } from 'enzyme'

describe("Users List Component", () => {
	const mockUser = (user = {}) => ({
		name: 'xyz',
		id: 1,
		gender: 'Male',
		age: 25
	})
	const mockProps = (props = {}) => ({
		users: [mockUser()],
		selectedUser: mockUser(),
		userDataLoading: false,
		...props
	})

	it('should keep loading if data is being fetched', () => {
		const wrapper = shallow(<UsersList {...mockProps({ userDataLoading: true })} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(1);
		expect(wrapper.find({ name: 'noUsers' }).length).toBe(0);
	})

	it('should show no users msg if users array is empty', () => {
		const wrapper = shallow(<UsersList {...mockProps({ users: [] })} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(0);
		expect(wrapper.find({ name: 'noUsers' }).length).toBe(1);
	})

	it('should render n user rows if n users are present', () => {
		const tempProps = {
			...mockProps(),
			users: [
				...(mockProps().users),
				mockUser({ id: 2 }),
				mockUser({ id: 3 }),
				mockUser({ id: 4 }),
			]
		}
		const wrapper = shallow(<UsersList {...tempProps} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(0);
		expect(wrapper.find(UserRow).length).toBe(tempProps.users.length);
	})
})