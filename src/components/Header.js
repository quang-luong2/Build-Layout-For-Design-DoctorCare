import logo_black from '../assets/images/Logo-black.svg'
import logo_white from '../assets/images/Logo-white.svg'
import icon_menu_mobile_white from '../assets/images/header-menu-icon-white.png'
import icon_menu_mobile_green from '../assets/images/header-menu-icon-green.png'
import icon_menu_close from '../assets/images/header-menu-close.png'
import icon_instagram from '../assets/images/instagram.png'
import icon_facebook from '../assets/images/facebook.png'
import icon_youtube from '../assets/images/youtube.png'

import { useEffect, useState } from 'react'

function Header() {
  const [isScroll, setIsScroll] = useState(false)
  const [isClickMenu, setIsClickMenu] = useState(false)

  useEffect(() => {
    const header = document.querySelector('.header__scroll')
    window.addEventListener('scroll', function () {
      header.classList.toggle('container-fluid--scroll', window.scrollY > 0)
      if (window.scrollY > 0) setIsScroll(true)
      else setIsScroll(false)
    })
  }, [])

  useEffect(() => {
    const header = document.querySelector('.header')
    const headerList = document.querySelector('.header__list')
    const iconOpen = document.querySelector('.header__menu__icon')
    const iconClose = document.querySelector('.header__menu__close')

    iconOpen.addEventListener('click', () => {
      showNavMobile()
      header.classList.add('playing')
    })
    function showNavMobile() {
      headerList.style.display = 'flex'
    }
    function hideNavMobile() {
      header.classList.remove('playing')
      headerList.style.display = 'none'
    }
    iconClose.addEventListener('click', hideNavMobile)
  }, [])

  function handleClickMenu() {
    setIsClickMenu(!isClickMenu)
  }

  return (
    <header className='header'>
      <a href='#1' className='header__logo'>
        <img src={isScroll || isClickMenu ? logo_white : logo_black} alt='Logo' />
      </a>
      <ul className={`header__list ${isScroll ? 'header--color' : ''}`}>
        <li className='header__item'>
          <a href='#1'>Início</a>
        </li>
        <li className='header__item'>
          <a href='#1'>Sobre</a>
        </li>
        <li className='header__item'>
          <a href='#1'>Serviços</a>
        </li>
        <li className='header__item'>
          <a href='#1'>Depoimentos</a>
        </li>
      </ul>
      <a href='#1' className={`btn header__btn ${isScroll ? 'header__btn--color' : ''}`}>
        Agendar consulta
      </a>
      <img
        src={isScroll ? icon_menu_mobile_white : icon_menu_mobile_green}
        onClick={handleClickMenu}
        className={`header__menu__icon ${isScroll ? 'header__menu__icon--white' : ''}`}
        alt='icon menu'
      />
      <img
        src={icon_menu_close}
        onClick={handleClickMenu}
        className='header__menu__close'
        alt='icon menu'
      />
      {isClickMenu ? (
        <div className={`footer__social ${isClickMenu ? 'header__menu__social' : ''}`}>
          <a href='#1'>
            <img src={icon_instagram} alt='Icon instagram' />
          </a>
          <a href='#1'>
            <img src={icon_facebook} alt='Icon facebook' />
          </a>
          <a href='#1'>
            <img
              src={icon_youtube}
              className={isClickMenu ? 'header--unset' : ''}
              alt='Icon youtube'
            />
          </a>
        </div>
      ) : (
        ''
      )}
      {isClickMenu ? (
        <a href='#1' className={`btn header__btn ${isClickMenu ? 'header__btn--white' : ''}`}>
          Agendar consulta
        </a>
      ) : (
        ''
      )}
    </header>
  )
}

export default Header
