import { GetStaticProps, GetStaticPropsResult } from 'next';
import { WithLayout } from '../hoc';
import axios from 'axios';
import { HomeProps, MenuItem } from '../interfaces';

function Search(): JSX.Element {
	return (
		<>
			Search...
		</>
	);
}


export default WithLayout(Search);


export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<GetStaticPropsResult<HomeProps>> => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};
