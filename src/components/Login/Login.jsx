import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import InputForm from '../InputForm/InputForm';



export default function Login() {
  return (
    <section className='login'>
        <div className='login__container'>
         <AuthForm 
         headerText='Рады видеть!'
         btnText='Войти'
         spanBtnText='Ещё не зарегистрированы?'
         navSpanBtnLink='/signup'
         spanBtnLinkText='Регистрация'
         classButton='button__indent'
         >
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
            />
         </AuthForm>
        </div>
    </section>
  )
}
