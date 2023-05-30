import { useContext } from 'react';
import { AppContext, AppContextProps } from '../../context';
import { FirstLevelMenu, TopLevelCategory } from '../../interfaces';
import CoursesIcon from '../../assets/svg/courses-icon.svg';
import ServiceIcon from '../../assets/svg/service-icon.svg';
import BookIcon from '../../assets/svg/books-icon.svg';
import ProductIcon from '../../assets/svg/products-svg.svg';
import styles from './Menu.module.css';
import cn from 'classnames';

const FIRST_LEVEL_MENU: FirstLevelMenu[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'service', name: 'Services', icon: <ServiceIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Books', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Products', icon: <ProductIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext<AppContextProps>(AppContext);

	const buildFirstLevelMenu = (): JSX.Element => {
		return (
			<>
				{FIRST_LEVEL_MENU.map(menu => {
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div className={cn(styles.level_1, {
								[styles.active]: menu.id === firstCategory
							})}>
								{menu.icon}
								<span>{menu.icon}</span>
							</div>
						</a>
						{menu.id === firstCategory && buildSecondLevelMenu()}
					</div>;
				})}
			</>
		);
	};

	const buildSecondLevelMenu = (): JSX.Element => {
		return <></>;
	};

	return (
		<>

		</>
	);
};