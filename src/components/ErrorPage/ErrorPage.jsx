import React from 'react';
import './ErrorPage.css'
import { Link, useNavigate } from 'react-router-dom';

export default function ErrorPage({ number, message }) {
  const navigate = useNavigate();
  
  return (
    <section className='error-page'>
      <div className='error-page__container'>
        <h1 className='error-page__header'>{number}</h1>
        <p className='error-page__message'>{message}</p>
        <Link className='error-page__navigate' onClick={() => {navigate(-1)}}>Назад</Link>
      </div>
      

      
    </section>
    
  )
}
