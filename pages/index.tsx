import { Caption, Button } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Caption tag='h1'>Caption component</Caption>
			<Button arrow='down' appearance='ghost'>Button component</Button>
		</>
	);
}
