
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { WithLayout } from '../../hoc';
import axios from 'axios';
import { MenuItem, ProductModel, TopPageModel } from '../../interfaces';
import { ParsedUrlQuery } from 'querystring';
import { AppContextProps } from '../../context';

const firstCategory = 0;

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
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
	const { data: menu } =
		await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
			firstCategory
		});

	return {
		paths: menu.flatMap(m => m.pages.map(page => '/courses/' + page.alias)),
		fallback: true,
	};
};


export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>): Promise<GetStaticPropsResult<CourseProps>> => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const { data: menu } =
		await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
			firstCategory
		});

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
			firstCategory,
			page,
			products
		}
	};
};

