import Logo from '../Logo/Logo';
import './AuthForm.css';
import { Link } from 'react-router-dom';

export default function AuthForm({ children, headerText, btnText, spanBtnText, navSpanBtnLink, spanBtnLinkText, classButton}) {
  return (
    <>
      <Logo />  
      <h1 className='auth-form__header'>{ headerText }</h1>
      <form className='auth-form__form'>
          { children }
      </form>
      <button className={`button__submit ${classButton}`} type='submit'>{ btnText }</button>
      <div className='auth-form__btn_container'>
          <span className="auth-form__btn_ask">{ spanBtnText }</span>
          <Link className='auth-form__btn_link' to={ navSpanBtnLink }>{ spanBtnLinkText }</Link>
      </div>
    </>

  )
    
            
}