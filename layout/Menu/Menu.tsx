import { FirstLevelMenu, PageItem } from '../../interfaces';
import { AppContext, AppContextProps } from '../../context';
import { FIRST_LEVEL_MENU } from '../../helpers';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.css';
import cn from 'classnames';


export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext<AppContextProps>(AppContext);
	const router = useRouter();

	const openedSecondLevel = (secondCategory: string): void => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		})
		);
	};

	const buildFirstLevelMenu = (): JSX.Element => {
		return (
			<ul className={styles.firstLevelList}>
				{FIRST_LEVEL_MENU.map(menu => (
					<li key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div className={cn(styles.level_1, {
								[styles.active]: menu.id === firstCategory
							})}>
								{menu.icon}
								<span>{menu.name}</span>
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
				{menu.map(m => {
					if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<li key={m._id.secondCategory}>
							<div className={styles.level_2} onClick={() => openedSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.opened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</li>
					)
				})}
			</ul>
		);
	};


	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<Link href={`/${route}/${page.alias}`}>
					<div
						className={cn(styles.level_3, {
							[styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
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