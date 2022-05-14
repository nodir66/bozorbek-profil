import React from 'react';
import styles from './index.module.sass'
import { Slider } from '../../component/carusel/Slider.js'
import { Form } from '../form/index.jsx';
import { Form2 } from '../form2/index.jsx';

export const Settings = () => {
    return (
        <div>
            <div className={styles.setting}>
            <Slider />
            {/* <Form/> */}
            <Form2/>
            </div>
            
        </div>
    );
};

