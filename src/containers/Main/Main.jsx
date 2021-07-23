import React from 'react';

import styles from './Main.module.scss';

export const Main = (props) => (
        <main {...props} className={`${styles.main} ${props.className}`} >
            {props.children}
        </main>
    )