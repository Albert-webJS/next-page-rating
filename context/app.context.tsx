import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem, TopLevelCategory } from '../interfaces';

export interface AppContextProps {
	menu: MenuItem[];
	firstCategoty: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider =
	({ menu, firstCategoty, children }: PropsWithChildren<AppContextProps>): JSX.Element => {

		const [menuState, setMenuState] = useState<MenuItem[]>(menu);
		const setMenu = (newMenu: MenuItem[]) => {
			setMenuState(newMenu);
		};

		return (
			<AppContext.Provider value={{ menu: menuState, firstCategoty, setMenu }}>
				{children}
			</AppContext.Provider>
		);
	};