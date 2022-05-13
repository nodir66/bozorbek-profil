import React from 'react';
import styles from "../history/index.module.sass"
import Delete from '../../assets/img/delete.png'


export const History = () => {
    return (
        <div>

            <div className={styles.history_content}>
                <div className={styles.left_block}>
                    <input type="checkbox" />
                    <h1>Яблочный уксус</h1>
                </div>

                <div className={styles.right_block}>
                    <button className={styles.search}>
                        Повторить поиск
                    </button>

                    <button className={styles.delete}>
                        <img src={Delete} alt="" />
                    </button>
                </div>
            </div>
            
        </div>
    );
};



