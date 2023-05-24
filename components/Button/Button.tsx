import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from "./Button.module.css";
import ArrowIcon from '../../assets/svg/arrow-btn.svg';
import cn from 'classnames';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	children: ReactNode;
	arrow?: 'right' | 'down' | 'none';
}

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	const buttonClasses = cn(styles.button, className, {
		[styles.primary]: appearance == 'primary',
		[styles.ghost]: appearance == "ghost",
	});

	return (
		<button
			{...props}
			className={buttonClasses}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down',
			})}>
				<ArrowIcon />
			</span>}
		</button >
	);
};