import './MoviesCardList.css'
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import img_6 from '../../images/test_pic.png';


export default function MoviesCardList() {
  return (
    <section className='movies-cardlist'>
        <ul className='movies-cardlist__container'>
            <MoviesCard isSaved={true} title={"33 слова о дизайне"} diration={'1ч 47м'} img={img_6} />
            <MoviesCard isSaved={false} title={"33 слова о дизайне"} diration={'1ч 47м'} img={img_6} />
            <MoviesCard isSaved={true} title={"33 слова о дизайне"} diration={'1ч 47м'} img={img_6} />
            <MoviesCard isSaved={true} title={"33 слова о дизайне"} diration={'1ч 47м'} img={img_6} />

        </ul>
    </section>

    
  )
}
