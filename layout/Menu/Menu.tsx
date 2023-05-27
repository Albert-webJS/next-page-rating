import { useContext } from 'react';
import { AppContext, AppContextProps } from '../../context';

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext<AppContextProps>(AppContext);
	return (
		<>
			<ul>
				{menu.map(element => (<li key={element._id.secondCategory}>{element._id.secondCategory}</li>))}
			</ul>
		</>
	);
};