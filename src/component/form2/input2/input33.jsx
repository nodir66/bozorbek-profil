import { useState } from 'react';
import viev from '../../../assets/img/view.png'



export const Input33 = () => {


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
            <div className="inp">
                <input  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Введите новый пароль" />
                <img onClick={togglePassword}  src={viev} alt="" />
            </div>
            
        </div>
    );
};

