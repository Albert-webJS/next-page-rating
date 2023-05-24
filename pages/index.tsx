import { Caption, Button, TextParagraph } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Caption tag='h1'>Caption component</Caption>
			<Button arrow='down' appearance='ghost'>Button component</Button>
			<TextParagraph size='small'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Cumque soluta amet adipisci debitis animi ea eaque.
				Veritatis fugit consectetur dolor nesciunt alias totam et.
				Alias amet explicabo officia reiciendis nihil?
			</TextParagraph>
		</>
	);
}
