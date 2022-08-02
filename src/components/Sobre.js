import images_doctor from '../assets/images/doctor.png'


function Sobre() {
  return (
    <section className='sobre'>
        <div className='sobre__image'>
            <img src={images_doctor} alt='Bác sĩ' />
        </div>
        <div className='sobre__group'>
            <p className='hero__text__heat'>SOBRE NÓS</p>
            <h2 className='servicos__text__title sobre__title--padding'>Entenda quem somos e por que existimos</h2>
            <p className='servicos__card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
    </section>
  );
}

export default Sobre;
