import { useState } from 'react';
import viev from '../../assets/img/view.png'
import styles from "./index.module.sass"
import { Input2 } from './input';
import { Input3 } from './input/index2';
import { Link } from "react-router-dom";


export const Form = () => {

    


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
                    <h1>Востановление пароля</h1>
                    <p>Введите  SMS код высленный вам на номер, указанный в вашем профиле +998 *******12</p>
                </div>

                <div  className={styles.form}>
                    <div className={styles.inp}>
                        <input  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Введите код" />
                        <img onClick={togglePassword}  src={viev} alt="" />
                    </div>

                    <Input2/>

                    <Input3/>
                </div>

                {/* <div className={styles.text_paroll}>
                    <p>Если вы забыли пароль, вы можете .
                        <b>сбросить его через Телефон</b>
                    </p>
                </div> */}


                


                <div className={styles.button}>
                    <button>Востановить</button>
                </div>
            </div>
            
        </div>
    );
};

