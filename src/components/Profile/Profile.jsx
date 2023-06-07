import './Profile.css';
import React from 'react';
import Header from '../Header/Header';


export default function Profile() {
    return (
        <>
            <Header type="profile" loggedIn={true} />
            <section className='profile'>
                <div className='profile__container'>
                   
                   <form className='profile__form'>
                        <h1 className='profile__header'>Привет, Виталий!</h1>
                        <label className='profile__label'>Имя
                            <input className='profile__input' value={"Виталий"} readOnly type="text" required/>
                        </label>
                        <label className='profile__label'>E-mail
                            <input className='profile__input' value={"pochta@yandex.ru"} readOnly type="email" required/>
                        </label>
                   </form>
                   <div className='profile__settings-cont'>
                        <button className='profile__edit'>Редактировать</button>
                        <button className='profile__logout'>Выйти из аккаунта</button>
                   </div>
                </div>
            </section>
        </>
      );
}
