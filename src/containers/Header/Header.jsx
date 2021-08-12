import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import css from './Header.module.scss';
// eslint-disable-next-line import/named
import { Menu } from '../../components/UI/Menu/Menu';
import { Langs } from '../../components/Langs/Langs';

export const Header = ({ translate }) => {
	const { scroll } = useLocomotiveScroll();
	const router = useRouter();
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
			{typeof translate === 'function' && translate('change-locale')}
			<Langs router={router}/>
			<Menu/>
		</header>
	);
};
