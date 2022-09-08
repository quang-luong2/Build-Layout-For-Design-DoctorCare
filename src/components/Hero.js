import images_woman from '../assets/images/image-woman.png'
import icon_whatapp from '../assets/images/whatsapp.png'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__text'>
        <p className='hero__text__heat'>BOAS-VINDAS A DOCTORCARE 👋</p>
        <h1 className='hero__text__title'>Assistência médica simplificada para todos</h1>
        <p className='hero__text__subtitle'>
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e
          proporcionar uma cura a longo prazo.
        </p>
        <a href='#1' className='btn hero__text__btn'>
          <img src={icon_whatapp} alt='Icon WhatApp'></img>
          <p className='hero__text__link'>Agende sua consulta</p>
        </a>
      </div>
      <div className='hero__image'>
        <img src={images_woman} alt='Hình Ảnh' />
      </div>
      <div className='hero__numbers'>
        <div className='hero__numbers__group'>
          <p className='hero__numbers__title'>+3.500</p>
          <p className='hero__numbers__text'>Pacientes atendidos</p>
        </div>
        <div className='hero__numbers__group'>
          <p className='hero__numbers__title'>+15</p>
          <p className='hero__numbers__text'>Especialistas disponíveis</p>
        </div>
        <div className='hero__numbers__group'>
          <p className='hero__numbers__title'>+10</p>
          <p className='hero__numbers__text'>Anos no mercado</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
