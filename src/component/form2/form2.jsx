import { useState } from 'react';
import "./form2.sass"
import { Input22 } from './input2/input22';
import { Input33 } from './input2/input33';
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
            <div className="form_content">
                <div className="text">
                    <h1>Пароли безапасности</h1>
                    <p>Пароль должен содержать включая цифры, буквы и специальные символы (!?@%%).</p>
                </div>

                <div  className="form">
                    <div className="inp">
                        <input  type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Введите старый пароль" />
                        <img onClick={togglePassword}  src={viev} alt="" />
                    </div>

                    <Input22/>

                    <Input33/>
                </div>

                <div className="text_parol">
                    <p>Если вы забыли пароль, вы можете .
                        <b>сбросить его через Телефон</b>
                    </p>
                </div>


                


                <div className="button">
                    <button>Востановить</button>
                    <button className="save_btn">Сохранить</button>
                </div>
            </div>
            
        </div>
    );
};

