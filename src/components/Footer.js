import logo_white from '../assets/images/Logo-white.svg'
import icon_instagram from '../assets/images/instagram.png'
import icon_facebook from '../assets/images/facebook.png'
import icon_youtube from '../assets/images/youtube.png'


function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__group'>
            <a href='#1'><img src={logo_white} className='footer__image' alt='Logo' /></a>
            <p className='footer__subtitle'>©2022 - DoctorCare.</p>
            <p className='footer__subtitle'>Todos os direitos reservados.</p>
        </div>
        <div className='footer__social'>
            <a href='#1'><img src={icon_instagram} alt='Icon instagram' /></a>
            <a href='#1'><img src={icon_facebook} alt='Icon facebook' /></a>
            <a href='#1'><img src={icon_youtube} alt='Icon youtube' /></a>
        </div>
    </footer>
  );
}

export default Footer;
