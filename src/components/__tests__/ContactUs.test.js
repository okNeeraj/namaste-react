import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from "../pages/ContactUs";

test("Contact us component should be render", () => {
	render(<ContactUs />);

	const heading = screen.getByRole('heading');

	// Assertion
	expect(heading).toBeInTheDocument();
})
