import React, {useContext, useEffect, useState} from 'react';
import cn from 'classnames';
import css from './Header.module.scss';
// eslint-disable-next-line import/named
import { SmoothScrollContext } from '../../../contexts/SmoothScroll.context';
// eslint-disable-next-line import/named
import { Menu } from '../Menu/Menu';

export const Header = () => {
	const { scroll } = useContext(SmoothScrollContext);
	const [isOnTop, isOnTopSet] = useState(true);
	
	useEffect(() => {
		if (!scroll) return;

		scroll.on('scroll', (event) => {
			isOnTopSet(event.scroll.y < 50)
		});
	});
	// useCallback(() => {
	// 	scroll.on('scroll', (event) => {
	// 		console.log(event);
	// 		// isOnTopSet(event.scroll.y < 50)
	// 	});
	// }, scroll);
	
	const headerClassList = cn(css.header, { [css.header__big] : isOnTop});
	return (
		<header className={headerClassList}>
			шапка
			<Menu/>
		</header>
	);
};