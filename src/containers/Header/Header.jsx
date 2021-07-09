import React, { useEffect, useState} from 'react';
import cn from 'classnames';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import css from './Header.module.scss';
// eslint-disable-next-line import/named
import { Menu } from '../../components/UI/Menu/Menu';

export const Header = () => {
	const { scroll } = useLocomotiveScroll();
	// const { scroll } = useContext(SmoothScrollContext);
	const [isOnTop, isOnTopSet] = useState(true);
	
	useEffect(() => {
		if (!scroll) return;

		scroll.on('scroll', (event) => {
			isOnTopSet(event.scroll.y < 50)
		});
	});

	const headerClassList = cn(css.header, { [css.header__big] : isOnTop});
	return (
		<header className={headerClassList}>
			шапка
			<Menu/>
		</header>
	);
};
