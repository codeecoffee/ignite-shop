import { styled } from '../styles';

const Button = styled('button', {
	backgroundColor: '$rocketSeat',
	borderRadius: 4,
	border: 0,
	padding: '4px 8px',

	'&:hover': {
		filter: 'brightness(.8)',
	},
});
export default function Home() {
	return (
		<>
			<Button>Hello</Button>
		</>
	);
}
