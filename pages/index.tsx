import { Caption, Button, TextParagraph, Tag, StarRating } from '../components';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { useState } from 'react';
import { WithLayout } from '../hoc';
import axios from 'axios';
import { MenuItem } from '../interfaces';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(3);
	return (
		<>
			<Caption className='props' tag="h1">Caption component</Caption>
			<Button arrow='down' appearance='ghost'>Button component</Button>
			<TextParagraph size='small'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Cumque soluta amet adipisci debitis animi ea eaque.
				Veritatis fugit consectetur dolor nesciunt alias totam et.
				Alias amet explicabo officia reiciendis nihil?
			</TextParagraph>
			<Tag size='medium' color="green">Tag component</Tag>
			<StarRating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map(element => (<li key={element._id.secondCategory}>{element._id.secondCategory}</li>))}
			</ul>
		</>
	);
}


export default WithLayout(Home);


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

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number
}