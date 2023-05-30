import { TopLevelCategory } from '.';

export type MenuItem = CategoryItem;

export interface CategoryItem {
  _id: {
	secondCategory: string
  }
  pages: PageItem[]
}

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface FirstLevelMenu {
	route: string,
	name: string,
	icon: JSX.Element
	id: TopLevelCategory
}
