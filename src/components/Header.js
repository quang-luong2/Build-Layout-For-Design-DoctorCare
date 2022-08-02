import logo_black from '../assets/images/Logo-black.svg'

function Header() {
    return (
      <header className='header'>
            <a href='#1' className='header__logo'>
                <img src={logo_black} alt='Logo' />
            </a>
            <ul className='header__list'>
                <li className='header__item'><a href='#1'>Início</a></li>
                <li className='header__item'><a href='#1'>Sobre</a></li>
                <li className='header__item'><a href='#1'>Serviços</a></li>
                <li className='header__item'><a href='#1'>Depoimentos</a></li>
            </ul>
            <a href='#1' className='btn header__btn'>Agendar consulta</a>
      </header>
    );
  }
  
  export default Header;