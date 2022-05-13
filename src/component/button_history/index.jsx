import React from 'react';
import styles from './index.module.sass';

export const Button_history = () => {
    return (
        <div>
            <div className={styles.button}>
                <p>12 Марта-12.03.2022 г</p>
                <button>Очистить историю</button>
            </div>
            
        </div>
    );
};

