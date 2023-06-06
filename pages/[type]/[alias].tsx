
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { WithLayout } from '../../hoc';
import axios from 'axios';
import { MenuItem, ProductModel, TopLevelCategory, TopPageModel } from '../../interfaces';
import { ParsedUrlQuery } from 'querystring';
import { AppContextProps } from '../../context';
import { FIRST_LEVEL_MENU } from '../../helpers';

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}


function Course({ menu, page, products }: CourseProps & AppContextProps): JSX.Element {
	return (
		<>
			{products && products.length}
		</>
	);
}


export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const menuItem of FIRST_LEVEL_MENU) {
		const { data: menu } =
			await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
				firstCategory: menuItem.id
			});
		paths = paths.concat(menu.flatMap(m => m.pages.map(page => `/${menuItem.route}/${page.alias}`)));
	}
	return {
		paths,
		fallback: true,
	};
};


export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>): Promise<GetStaticPropsResult<CourseProps>> => {
	if (!params) {
		return {
			notFound: true
		};
	}

	const firstCategoryItem = FIRST_LEVEL_MENU.find(menu => menu.route === params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}

	try {
		const { data: menu } =
			await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
				firstCategory: firstCategoryItem?.id
			});

		if (menu.length === 0) {
			return {
				notFound: true
			};
		}

		const { data: page } =
			await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

		const { data: products } =
			await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
				category: page.category,
				limit: 10
			});

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem?.id,
				page,
				products
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

