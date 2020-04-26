import React from 'react';
import UserAddresses from './UserAddresses';
import AddressCard from './AddressCard';
import { shallow, mount } from 'enzyme';
import { mockAddress } from '../../utils/testingUtils'

describe('UserAdress component', () => {
	const mockProps = (props = {}) => ({
		selectedUser: {
			name: 'test',
			id: 123,
		},
		userAddress: [],
		userAddressesLoading: true,
		...props
	})

	it('should render the loading if data is in loading state', () => {

		const wrapper = shallow(<UserAddresses {...mockProps()} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(1);
		expect(wrapper.find({ name: 'noContent' }).length).toBe(0);
	})

	it('should render the no content message if no address is provided', () => {
		const wrapper = shallow(<UserAddresses {...mockProps({ userAddressesLoading: false })} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(0);
		expect(wrapper.find({ name: 'noContent' }).length).toBe(1);
	})

	it('should render 1 address card  if single address provided', () => {
		const wrapper = shallow(<UserAddresses
			{
			...{
				...mockProps(),
				userAddress: [mockAddress()],
				userAddressesLoading: false
			}
			}
		/>)

		expect(wrapper.find({ name: 'loading' }).length).toBe(0);
		expect(wrapper.find(AddressCard).length).toBe(1);
	})

	it('should render n address card  if n addresses provided', () => {
		const tempProps = {
			...mockProps(),
			userAddress: [
				mockAddress(),
				mockAddress(),
				mockAddress()
			],
			userAddressesLoading: false
		}

		const wrapper = shallow(<UserAddresses {...tempProps} />)

		expect(wrapper.find({ name: 'loading' }).length).toBe(0);
		expect(wrapper.find(AddressCard).length).toBe(tempProps.userAddress.length);
	})
})