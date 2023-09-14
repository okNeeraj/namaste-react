import { createContext } from 'react'

const UserContext = createContext({
	userId: 1,
	firstName: 'Neeraj',
	lastName: 'Singh',
	fullName: 'Neeraj Singh',
	userName: ' okNeeraj',
	mobileNumber: 7400000000,
	emailId: 'okneerajsingh@gmail.com'
});

export default UserContext;
