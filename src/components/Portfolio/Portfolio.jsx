import "./Portfolio.css";
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        
        <h3 className="portfolio__title">Портфолио</h3>

        <ul className="portfolio__links">
          
            <li className="portfolio__item">
                <Link className="portfolio__link" to="https://romankrasinskiy.github.io/how-to-learn/" target="_blank">
                    <p className="portfolio__link-name">Статичный сайт</p>
                    <img className="portfolio__link-ico" src={arrow} alt="Иконка ссылки в виде стрелочки" />
                </Link>
            </li>
            <div className="background portfolio__item_static" />
            <li className="portfolio__item">
                <Link className="portfolio__link" to='https://romankrasinskiy.github.io/russian-travel/' target="_blank">
                    <p className="portfolio__link-name">Адаптивный сайт</p>
                    <img className="portfolio__link-ico" src={arrow} alt="Иконка ссылки в виде стрелочки" />
                </Link>
            </li>
            <div className="background portfolio__item_adaptive" />
            <li className="portfolio__item">
                <Link className="portfolio__link" to="https://mymesto.nomoredomains.monster/" target="_blank">
                    <p className="portfolio__link-name">Одностраничное приложение</p>
                    <img className="portfolio__link-ico" src={arrow} alt="Иконка ссылки в виде стрелочки" />
                </Link>
            </li>
            <div className="background portfolio__item_single-page-app" />
        </ul>
        
      </div>
    </section>
  );
}