import Footer from "../Footer";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


it("Footer should be render", () => {
	render(<Footer />);

	const footer = screen.getByTestId('footer')
	expect(footer).toBeInTheDocument();
});

it('Footer contain career link', () => {
	render(<Footer />);

	const careerlink = screen.getByText('Careers')
	expect(careerlink).toBeInTheDocument();
})
