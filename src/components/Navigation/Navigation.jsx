import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Navigation({ isLoggedIn }) {
  return (
    <nav className={ isLoggedIn ? 'nav__loggedIn ' : 'nav' }>
      { isLoggedIn ? 
      ( 
        <>
          <div className='nav__container'>
            <NavLink className="nav__link nav__link_type_movies" to='/movies'>Фильмы</NavLink>
            <NavLink className="nav__link nav__link_type_saved-movies" to='/saved-movies'>Сохранённые фильмы</NavLink>
          </div>
          <div className='nav__profile_container'>
            <NavLink className="nav__link_type_profile" to='/profile'>
              <div className='icon-profile'>
                <p className='nav__link icon-profile_text'>Аккаунт</p>
                <div className='icon-profile_icon' />
              </div>
            </NavLink>
          </div>
          <Burger />
        </> 
      ) : ( 
        <>
          <NavLink className="nav__link nav__link_type_signup" to="/signup">Регистрация</NavLink>
          <NavLink className="nav__link nav__link_type_signin" to="/signin">Войти</NavLink>
        </> 
      )}
    </nav>
  )
}
      