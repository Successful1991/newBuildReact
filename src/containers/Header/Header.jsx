import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Button from '@material-ui/core/Button';
import { ReactComponent as BurgerIcon } from '../../../public/icons/burger.svg';
import css from './Header.module.scss';
// eslint-disable-next-line import/named
import { Menu } from '../../components/UI/Menu/Menu';
import { Langs } from '../../components/Langs/Langs';

const useStyles = makeStyles((theme) => ({
	button: {
	  margin: theme.spacing(1),
	},
  }));

export const Header = ({ translate }) => {
	const { scroll } = useLocomotiveScroll();
	const { t } = useTranslation();
	const router = useRouter();
	const classes = useStyles();
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
			<Button
				variant="contained"
				color="secondary"
				className={classes.button}
				endIcon={<BurgerIcon style={{ width: '10px', height: '10px' }}/>}
			>{t('change-locale')}</Button>
			<Menu/>
		</header>
	);
};
