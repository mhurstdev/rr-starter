import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
	it('renders children to the screen', () => {
		render(<Button>Click!</Button>);
		expect(
			screen.getByRole('button', { name: 'Click!' }),
		).toBeInTheDocument();
	});
});
