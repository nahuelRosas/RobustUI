import { GlobalProvider } from 'provider';
import { Button, Flex, Image } from 'components';
export default function Web() {
	const loading = false;
	return (
		<GlobalProvider>
			<Flex color="behance3" flexDirection="column">
				<Button colorSchema="purple" isLoading={loading}>
					hola
				</Button>
				<Button colorSchema="purple" variant="outline" isLoading={loading}>
					hola
				</Button>
				<Button colorSchema="teal" isLoading={loading}>
					hola
				</Button>
				<Button colorSchema="teal" variant="outline" isLoading={loading}>
					hola
				</Button>
				<Button colorSchema="red" isLoading={loading}>
					hola
				</Button>
				<Button colorSchema="red" variant="outline" isLoading={loading}>
					hola
				</Button>
			</Flex>
		</GlobalProvider>
	);
}
