import React from 'react';
import { History } from '../history/index.jsx'
import { Button_history } from '../button_history/index.jsx'
import styles from './index.module.sass'

export const Historycontent = () => {

    
    


    return (
        <div className={styles.container}>
            <div className={styles.top_content}>
                <Button_history/>

            </div>
            <div className={styles.history_content}>
                <History/>
                <History/>
                <History/>
                <History/>
            </div>
        </div>
    );
};

