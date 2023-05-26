import { Header, Sidebar, Footer } from './index';
import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.content}>
				{children}
			</div>
			<Footer className={styles.footer} />
		</div >
	);
};