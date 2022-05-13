import { useState } from 'react';
import viev from '../../../assets/img/view.png'
import styles from "../index.module.sass"



export const Input2 = () => {

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




    return(
        <div>
            <div className={styles.inp}>
                <input  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Введите новый пароль" />
                <img onClick={togglePassword}  src={viev} alt="" />
            </div>
        </div>
    );
};

