import { useContext } from 'react';
import { AppContext, AppContextProps } from '../../context';

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext<AppContextProps>(AppContext);
	return <></>;
};