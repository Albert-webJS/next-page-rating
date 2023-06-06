import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import cn from 'classnames';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<aside
			className={cn(styles.sidebar, className)}
			{...props}
		>
			<div className={styles.logo}>Logo</div>
			<div>search...</div>
			<Menu />
		</aside>
	);
};