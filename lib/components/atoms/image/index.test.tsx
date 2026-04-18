import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Image } from '.';

describe('Button', () => {
	it('renders to the screen', () => {
		render(<Image alt="Image!" />);
		expect(screen.getByRole('img', { name: 'Image!' })).toBeInTheDocument();
	});

	it('has no a11y violations', async () => {
		const { container } = render(<Image alt="A sunset" src="sunset.jpg" />);
		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
