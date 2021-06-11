import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Button.module.scss';
import { ReactComponent as HackerIcon } from './icons/hacker.svg';

export const Button = ({ children, size }) => {
  const buttonStyles = cn(css.button, { [css.small]: size === 'small' });

  return (
    <button className={buttonStyles}>
      <HackerIcon width={30} height={30} className={css.icon} />
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
};
