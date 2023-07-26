import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className='search__form'>
            <input className='search__input' placeholder='Фильм'></input>
            <button className='search__submit' type='submit'>Найти</button>
        </form>
        <label className='search__params'>
            <input className='search__shorts' id='shorts' type='checkbox' />
            Короткометражки
        </label>
      </div>
    </section>
  )
}
