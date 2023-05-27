import { FunctionComponent } from 'react';
import { AppContextProps, AppContextProvider } from '../context';
import { Layout } from '../layout';

export const WithLayout = <T extends Record<string, unknown> & AppContextProps>(Component: FunctionComponent<T>) => {
	return function WithLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategoty={props.firstCategoty}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};