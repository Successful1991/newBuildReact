import {useRef} from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Home from '../src/pages/index';

export default function IndexPage() {
	const containerRef = useRef(null);
	return (
		<LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef}>
			<Home containerRef={containerRef} />
		</LocomotiveScrollProvider>
	)
}