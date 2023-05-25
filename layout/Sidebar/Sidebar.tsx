import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<aside {...props}>
			Sidebar ...
		</aside>
	);
};