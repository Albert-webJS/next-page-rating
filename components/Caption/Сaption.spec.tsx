import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Caption } from './Caption';

describe('Caption', () => {
	test('renders the correct heading with children', async () => {
		render(<Caption tag="h1">Heading</Caption>);
		const CaptionElement = screen.getByText('Heading');
		await waitFor(() => {
			expect(CaptionElement).toBeInTheDocument();
		});
		expect(CaptionElement.tagName).toBe('H1');
	});

	test('applies the correct CSS class based on the tag', () => {
		const { container } = render(<Caption tag="h1">Hello, world!</Caption>);
		const captionElement = container.firstChild as HTMLElement;
		expect(captionElement).toHaveClass('h1');
	});
});
