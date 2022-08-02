import icon_check from '../assets/images/check.png'

function Servicos() {
    return (
      <section className='servicos'>
           <div className='servicos__text'>
                <p className='hero__text__heat'>SERVIÇOS</p>
                <h2 className='servicos__text__title servicos__text__title--width'>Como podemos ajudá-lo a se sentir melhor?</h2>
           </div>
           <div className='servicos__card'>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Saúde Hormonal</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Bem-estar mental</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Bem-estar mental</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Cuidados Pediátricos</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Autoimune e Inflamação</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
                <div className='servicos__card__item'>
                    <img src={icon_check} alt='Icon Check' />
                    <p className='servicos__card__title'>Saúde do Coração</p>
                    <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                </div>
           </div>
      </section>
    );
  }
  
  export default Servicos;