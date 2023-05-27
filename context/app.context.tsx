import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem, TopLevelCategory } from '../interfaces';

export interface AppContextProps {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<AppContextProps>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider =
	({ menu, firstCategory, children }: PropsWithChildren<AppContextProps>): JSX.Element => {

		const [menuState, setMenuState] = useState<MenuItem[]>(menu);
		const setMenu = (newMenu: MenuItem[]) => {
			setMenuState(newMenu);
		};

		return (
			<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
				{children}
			</AppContext.Provider>
		);
	};