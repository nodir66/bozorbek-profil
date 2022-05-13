import { useState } from 'react';
import styles from "./index.module.sass"
import { Input22 } from './input2';
import { Input33 } from './input2/index2';
import viev from '../../assets/img/view.png'
import { Link } from "react-router-dom";



export const Form2 = () => {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }


    return (
        <div>
            <div className={styles.form_content}>
                <div className={styles.text}>
                    <h1>Пароли безапасности</h1>
                    <p>Пароль должен содержать включая цифры, буквы и специальные символы (!?@%%).</p>
                </div>

                <div  className={styles.form}>
                    <div className={styles.inp}>
                        <input  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Введите старый пароль" />
                        <img onClick={togglePassword}  src={viev} alt="" />
                    </div>

                    <Input22/>

                    <Input33/>
                </div>

                <div className={styles.text_parol}>
                    <p>Если вы забыли пароль, вы можете .
                        <b>сбросить его через Телефон</b>
                    </p>
                </div>


                


                <div className={styles.button}>
                    <button>Востановить</button>
                    <button className={styles.save_btn}>Сохранить</button>
                </div>
            </div>
            
        </div>
    );
};

