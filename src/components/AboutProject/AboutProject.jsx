import './AboutProject.css';

export default function AboutProject() {

  return (
    <section className='about-project' id='about-project'>
        <div className='about-project__container'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__grid-text'>
                <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
                <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
                <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__grid-timeline'>
                <p className='about-project__item-1'>1 неделя</p>
                <p className='about-project__item-2'>4 недели</p>
                <p className='about-project__item-3'>Back-end</p>
                <p className='about-project__item-3'>Front-end</p>
            </div>
        </div>
    </section>
  )
}