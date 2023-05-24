import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from "./Button.module.css";
import ArrowIcon from '../../assets/svg/arrow-btn.svg';
import cn from 'classnames';

type Appearance = 'primary' | 'ghost';
type ArrowDirection = 'right' | 'down' | 'none';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: Appearance;
	arrow?: ArrowDirection;
	children: ReactNode;
}

export const Button = (
	{ appearance, arrow = 'none', children, className, ...props }: ButtonProps
): JSX.Element => {

	const buttonClasses = cn(styles.button, className, {
		[styles.primary]: appearance == 'primary',
		[styles.ghost]: appearance == "ghost",
	});

	const renderArrow = () => {
		if (arrow === "none") return null;

		const arrowClasses = cn(styles.arrow, {
			[styles.down]: arrow === 'down',
		});
		return (
			<span className={arrowClasses}>
				<ArrowIcon />
			</span>
		);
	};

	return (
		<button
			{...props}
			className={buttonClasses}
		>
			{children}
			{renderArrow()}
		</button >
	);
};