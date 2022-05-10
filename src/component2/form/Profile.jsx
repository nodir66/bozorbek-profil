import { useState } from 'react';
import "./Profile.sass"
import { useFormik } from 'formik'
import { UploadAndDisplayImage } from '../form/imgupload/Img.jsx'
import face from '../../assets/img/face.png'




const handleValidate  = (values) => {
    const errors = {}

    if(values.email.length === 0){
        errors.emailError = "Emailni to'ldiring"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.emailError = 'Noto`g`ri email'  
        
        
    }

    if(values.name.length === 0){
        errors.nameError = 'Ismingizni kiriting'
        
    }


    if(values.sname.length === 0){
        errors.snameError = 'Familyangizni kiriting'
        
    }


    if(values.number.length === 0){
        errors.numberError = 'Telefon raqamingizni kiriting'
        
    }




    return errors
}



export const Profile = () => {


    const formik = useFormik({
        initialValues:{
            email: '',
            name: '',
            sname: '',
            number: ''
        },

        validate: handleValidate,
        onSubmit: values => {
            
            // const string ={}

            




            // return string
            

        }    
    })


    


    return (
        <div>
            <div className="profile">
                <div className="profile_leftt">
                <div className="profile_top">
                    <UploadAndDisplayImage/>
                </div>

                <div className="name">
                    <h1>Нина Азаматова</h1>
                    <p>Покупатель № 15</p>
                </div>

                <div className="info">
                    <ul>
                        <li>Нина</li>
                        <li>Азаматова</li>
                        <li>{}</li>
                        <li>+998 91 655 55 55</li>
                    </ul>
                </div>

                    <span>Выйти из профиля</span>
                </div>

                <div className="profile_right">
                    <div className="input">
                        <input type="text" onChange={formik.handleChange} name="name" value={formik.values.name} placeholder="Введите ваше имя" />
                        <p>{formik.errors.nameError}</p>
                        <input type="text" onChange={formik.handleChange} name="sname" value={formik.values.sname} placeholder="Введите ваше фамиля" />
                        <p>{formik.errors.snameError}</p>
                        <input id="inp" type="email" onChange={formik.handleChange} name="email" value={formik.values.email} placeholder="Введите адрес электронной почты" />
                        <p>{formik.errors.emailError}</p>
                        <input type="number" onChange={formik.handleChange} name="number" value={formik.values.number} placeholder="Введите свой номер телефона" />
                        <p>{formik.errors.numberError}</p>
                    </div>

                    <div className="buttons">
                        <button type = 'button'  onClick = {formik.handleSubmit}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

