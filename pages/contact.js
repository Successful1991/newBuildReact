import {useRef} from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Contact from '../src/pages/Contacts';

export default function IndexPage() {
	const containerRef = useRef(null);
	return (
		<LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef}>
			<Contact containerRef={containerRef} />
		</LocomotiveScrollProvider>
	)
}