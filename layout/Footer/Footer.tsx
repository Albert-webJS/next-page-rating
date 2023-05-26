import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import cn from 'classnames';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer
			className={cn(className, styles.footer)}
			{...props}
		>
			<div>
				© {format(new Date(), 'yyyy')} All rights reserved
			</div>
			<a href="#" target="_blank">User agreement</a>
			<a href="#" target="_blank">Privacy policy</a>
		</footer>
	);
};