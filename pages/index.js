// eslint-disable-next-line import/named
import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context';
import Home from '../src/pages/index';

export default function IndexPage() {
	return (
		<SmoothScrollProvider options={{ smooth: true }}>
			<Home />
		</SmoothScrollProvider>
	)
}