import NavTab from '../NavTab/NavTab';
import './Promo.css';

export default function Promo() {
  return (
    <section className='promo'>
        <div className='promo__container'>
           <h1 className='promo__header'>Учебный проект студента<br/>факультета Веб&#8209;разработки.</h1>
            <NavTab />
        </div>
    </section>
  )
}
