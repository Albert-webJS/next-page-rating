import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';

type Size = 'small' | 'medium';
type TagColor = "ghost" | "red" | "gray" | "green" | "primary";

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: Size;
	color?: TagColor;
	href?: string;
	children: ReactNode

}

export const Tag = ({ size, color = 'ghost', href, children, className, ...props }: TagProps) => {
	const TagClasses = cn(styles.tag, className, {
		[styles.small]: size === 'small',
		[styles.medium]: size === 'medium',
		[styles.ghost]: color === 'ghost',
		[styles.red]: color === 'red',
		[styles.gray]: color === 'gray',
		[styles.grren]: color === 'green',
		[styles.primary]: color === 'primary',
	});

	return (
		<div className={TagClasses} {...props}>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};