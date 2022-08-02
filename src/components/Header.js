import logo_black from '../assets/images/Logo-black.svg'
import logo_white from '../assets/images/Logo-white.svg'
import icon_menu_mobile from '../assets/images/header-menu-icon.png'
import { useEffect, useState } from 'react';

function Header() {

    const [onscroll, setOnscroll] = useState(false)
    console.log(onscroll);
    useEffect(() => {
        const header = document.querySelector('.header__scroll')
            window.addEventListener('scroll', function(){
            header.classList.toggle('container-fluid--scroll', window.scrollY > 0)
            if(window.scrollY > 0) setOnscroll(true)
            else setOnscroll(false)
        })
    }, [])

    return (
      <header className='header'>
            <a href='#1' className='header__logo'>
                <img src={onscroll ? logo_white : logo_black} alt='Logo' />
            </a>
            <ul className={`header__list ${onscroll ? 'header--color' : ''}`}>
                <li className='header__item'><a href='#1'>Início</a></li>
                <li className='header__item'><a href='#1'>Sobre</a></li>
                <li className='header__item'><a href='#1'>Serviços</a></li>
                <li className='header__item'><a href='#1'>Depoimentos</a></li>
            </ul>
            <a href='#1' className={`btn header__btn ${onscroll ? 'header__btn--color' : ''}`}>Agendar consulta</a>
            <img src={icon_menu_mobile} className='header__menu__icon' alt='icon menu' />
      </header>
    );
  }
  
  export default Header;