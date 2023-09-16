import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from "../pages/ContactUs";

describe('ContactUs Component', () => {
	beforeAll(() => {
		// console.log('beforeAll')
	});

	beforeEach(() => {
		render(<ContactUs />);
	});

	afterEach(() => {
		// console.log('afterEach')
	});

	afterAll(() => {
		// console.log('afterAll')
	});


	it('Should contain a button', () => {
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it("Should contain heading", () => {
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	});
});
