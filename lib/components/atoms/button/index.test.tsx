import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
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

	it('has no a11y violations', async () => {
		const { container } = render(<Button>Click!</Button>);
		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});

	it('posts on click', async () => {
		render(<Button>Click!</Button>);
		await userEvent.click(screen.getByRole('button', { name: 'Click!' }));
		expect(
			await screen.findByRole('button', { name: 'Clicked!' }),
		).toBeInTheDocument();
	});
});
