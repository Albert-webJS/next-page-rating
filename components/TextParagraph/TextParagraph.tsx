import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './TextParagraph.module.css';
import cn from 'classnames';

type ParagraphSize = "small" | "medium" | "large";

interface TextParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size: ParagraphSize;
	children: ReactNode;
}

export const TextParagraph = (
	{ size = "medium", className, children, ...props }: TextParagraphProps
): JSX.Element => {

	const paragraphClasses = cn(styles.paragraph, className, {
		[styles.small]: size === 'small',
		[styles.medium]: size === "medium",
		[styles.large]: size === "large",
	});

	return (
		<p className={paragraphClasses} {...props}>
			{children}
		</p>
	);
};