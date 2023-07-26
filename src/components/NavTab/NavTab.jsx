import './NavTab.css'

export default function NavTab() {
  return (
    <section className='nav-tab'>
        <div className='nav-tab__container'>
            <a href='#about-project' className="link">О проекте</a> 
            <a href='#technologies' className="link" to="/">Технологии</a>
            <a href='#about-creator' className="link" to="/">Студент</a>
        </div>
    </section>
  )
}