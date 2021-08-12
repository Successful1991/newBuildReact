import React from 'react';
// import PropTypes from 'prop-types';
// import cn from 'classnames';
import css from './Langs.module.scss';

export const Langs = ({ router }) => {
  const { locale, locales } = router;
  const langsWithoutDefault = locales.filter(lang => lang !== locale);
  return (
    <div className={css['langs-header']}>
      <ul>
          <li 
            className={css.active} >
            <a href={`${router.asPath}`}>{locale}</a>
          </li>
          {langsWithoutDefault.map((lang) => (
            <li 
              className={lang === locale ? css.active: ''} 
              key={lang}>
              <a href={`/${lang}${router.asPath}`}>{lang}</a>
            </li>
          ))}
        
      </ul>
    </div>
  );
}

Langs.propTypes = {
  // children: PropTypes.node,
};
