import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Infrastructure from '../src/pages/Infrastructure';

export default function IndexPage() {
	const containerRef = useRef(null);
	return (
		<LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef}>
				<Infrastructure ref={containerRef} />
		</LocomotiveScrollProvider>
	)
}