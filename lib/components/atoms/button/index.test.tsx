import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';
import { server } from '../../../testing/msw';
import { handlers } from './index.mocks';

describe('Button', () => {
	beforeEach(() => server.use(...handlers));

	it('renders children to the screen', () => {
		render(<Button>Click!</Button>);
		expect(
			screen.getByRole('button', { name: 'Click!' }),
		).toBeInTheDocument();
	});

	it('posts on click', async () => {
		render(<Button>Click!</Button>);
		await userEvent.click(screen.getByRole('button', { name: 'Click!' }));
		expect(
			await screen.findByRole('button', { name: 'Clicked!' }),
		).toBeInTheDocument();
	});
});
