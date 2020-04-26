import React from 'react';
import { getUserAddress, UserAddressesContainer } from './UserAddressesContainer'
import { shallow } from 'enzyme';
import { mockUser, mockAddress } from '../utils/testingUtils'

describe('UserListContainer ', () => {

	const mockProps = (props = {}) => ({
		userAddress: [],
		fetchUserAddresses: jest.fn(),
		...props
	});

	it("should fetch users address", () => {
		const props = mockProps({ selectedUser: mockUser() });
		shallow(<UserAddressesContainer {...props} />);

		expect(props.fetchUserAddresses.mock.calls.length).toBe(1);
		expect(props.fetchUserAddresses.mock.calls[0][0]).toBe(props.selectedUser.id)
	})

	it("should not fetch users address since address already present", () => {
		const props = mockProps({ userAddress: [mockAddress()], selectedUser: mockUser() });

		shallow(<UserAddressesContainer {...props} />);

		expect(props.fetchUserAddresses.mock.calls.length).toBe(0);
	})
})

describe("getUserAddress function", () => {
	const mockAddress = (address = {}) => ({
		house_no: 123,
		street_name: 'xyz ',
		city_name: 'abb',
		country: 'kdjgkla',
		...address
	})
	it("should return empty array if addresses is empty", () => {
		const res = getUserAddress([], null);
		expect(res.length).toBe(0);
	})
	it("should return empty array if user id is null", () => {
		const res = getUserAddress([], null);
		expect(res.length).toBe(0);
	})
	it("should return array of addresses", () => {
		const res = getUserAddress({ 1: [mockAddress()] }, 1);
		expect(res.length).toBeGreaterThan(0);
	})
})