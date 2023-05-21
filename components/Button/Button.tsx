import { ReactNode } from 'react';
import styles from "./Button.module.css";
import cn from 'classnames';

interface ButtonProps {
	appearance: 'primary' | 'ghost';
	children: ReactNode;
}

export const Button = ({ appearance, children }: ButtonProps) => {
	const buttonClasses = cn(styles.button, {
		[styles.primary]: appearance == 'primary',
		[styles.ghost]: appearance == "ghost",
	});

	return (
		<button className={buttonClasses}>
			{children}
		</button >
	);
};