import { Caption } from '../components/Caption/Caption';
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
	return (
		<>
			<Caption tag="h1">Heading</Caption>
			<Button appearance='primary'>button</Button>
		</>
	);
}
