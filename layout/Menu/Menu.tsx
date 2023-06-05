import { FirstLevelMenu, TopLevelCategory, PageItem } from '../../interfaces';
import { AppContext, AppContextProps } from '../../context';
import { useContext } from 'react';
import Link from 'next/link';
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
			<ul className={styles.firstLevelList}>
				{FIRST_LEVEL_MENU.map(menu => (
					<li key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div className={cn(styles.level_1, {
								[styles.active]: menu.id === firstCategory
							})}>
								<span>{menu.icon}</span>
							</div>
						</Link>
						{menu.id === firstCategory && buildSecondLevelMenu(menu)}
					</li>
				))}
			</ul>
		);
	};


	const buildSecondLevelMenu = (menuItem: FirstLevelMenu): JSX.Element => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => (
					<li key={m._id.secondCategory}>
						<div className={styles.level_2}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.opened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</li>
				))}
			</ul>
		);
	};


	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<Link href={`/${route}/${page.alias}`}>
					<div
						className={cn(styles.level_3, {
							[styles.thirdLevelActive]: true
						})}
					>
						{page.category}
					</div>
				</Link>
			))
		);
	};


	return (
		<>
			{buildFirstLevelMenu()}
		</>
	);
};