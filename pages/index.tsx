import { Caption, Button, TextParagraph, Tag, StarRating } from '../components';
import { useState } from 'react';
import { WithLayout } from '../hoc';

function Home(): JSX.Element {
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
		</>
	);
}


export default WithLayout(Home);