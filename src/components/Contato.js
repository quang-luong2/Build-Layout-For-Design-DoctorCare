import icon_map from '../assets/images/map.svg'
import icon_mail from '../assets/images/mail.svg'
import icon_whatapp from '../assets/images/whatsapp.svg'
import image_smile from '../assets/images/smile.png'


function Contato() {
  return (
    <section className='contato'>
        <div className='contato__group'>
            <p className='servicos__text__title contato__title--padding'>Entre em contato com a gente!</p>
            <div className='contato__contact'>
                <img src={icon_map} alt='Icon vị trí' />
                <p className='servicos__card__text'>R. Amauri Souza, 346</p>
            </div>
            <div className='contato__contact'>
                <img src={icon_mail} alt='Icon mail' />
                <p className='servicos__card__text'>contato@doctorcare.com</p>
            </div>
            <a href='#1' className='btn hero__text__btn'> 
                <img src={icon_whatapp} alt='Icon WhatApp'></img>
                <p className='hero__text__link'>Agende sua consulta</p>
            </a>
        </div>
        <div className='contato__image'>
            <img src={image_smile} alt='Hình Ảnh' />
        </div>
    </section>
  );
}

export default Contato;
