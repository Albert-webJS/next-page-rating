import { Header, Sidebar, Footer } from './index';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<section>
					{children}
				</section>
			</main>
			<Footer />
		</>
	);
};