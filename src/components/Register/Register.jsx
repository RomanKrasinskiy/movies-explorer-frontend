import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import InputForm from '../InputForm/InputForm';



export default function Register() {
  return (
    <section className='register'>
        <div className='register__container'>
         <AuthForm 
         headerText='Добро пожаловать!'
         btnText='Зарегистрироваться'
         spanBtnText='Уже зарегистрированы?'
         navSpanBtnLink='/signin'
         spanBtnLinkText='Войти'
         >
            <InputForm
            type='text'
            name='text'
            required
            label='Имя'
            
            />
            <InputForm
            type='email'
            name='email'
            required
            label='E-mail'
            temporaryValue='pochta@yandex.ru'
            />
            <InputForm
            type='password'
            name='password'
            required='true'
            label='Пароль'
            spanText='Что-то пошло не так...'
            temporaryClass='input-form__input_error'
            temporaryValue='Временные значения'
            />
         </AuthForm>
        </div>
    </section>
  )
}
