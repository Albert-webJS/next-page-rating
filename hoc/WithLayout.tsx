import { FunctionComponent } from 'react';
import { Layout } from '../layout';

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function WithLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};