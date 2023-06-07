import './Header.css'
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

export default function Header({type, loggedIn}) {
  return (
    <header className={`header header_type_${type}`}>
        <div className='header_container'>
            <Logo />
            <Navigation isLoggedIn={loggedIn} />
        </div>
    </header>
  )
}
