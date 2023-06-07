import './ElseMoviesCard.css';
import React from 'react';

export default function ElseMoviesCard({ isActive}) {
  return (
    <section className='else-movies'>
      
    {isActive?
      <button className='else-movies__button_active' type='submit'>Ещё</button>
    : ''
    }  
    </section>
  )
}
