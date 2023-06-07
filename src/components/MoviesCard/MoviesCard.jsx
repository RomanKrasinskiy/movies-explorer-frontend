import './MoviesCard.css';
import React from 'react';


export default function MoviesCard({ isSaved, title, diration, img }) {
    return (
        <li className='card'>
            <p className='card__title'>{title}</p>
            <p className='card__duration'>{diration}</p>
            <button className={isSaved ? 'card-button-status card__saved' : 'card-button-status card__unsaved'} />
            <img src={img} alt={title} className='card__img'  />
        </li>
      );
}
