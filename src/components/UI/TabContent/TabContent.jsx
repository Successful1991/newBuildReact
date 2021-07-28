import React from 'react';
// import PropTypes from "prop-types";
// import cn from 'classnames';
import css from './TabContent.module.scss';

export const TabContent = ({ children, selectId, index }) => (
    <div
      role="tabpanel"
      hidden={selectId !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={css.wrapper}
    >
      {selectId === index && (
        children
      )}
    </div>
  );

