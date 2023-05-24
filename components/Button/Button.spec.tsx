import { render, screen } from "@testing-library/react";
import { Button } from './Button';

describe("Button", () => {
	test("renders button with correct appearance", () => {
		render(<Button appearance='primary'>Primary Button</Button>);
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveClass("primary");
	});

	test("renders button with correct children", () => {
		render(<Button appearance='ghost'>Ghost Button</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement.textContent).toBe("Ghost Button");
	});
});