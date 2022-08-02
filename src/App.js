import './sass/app.scss'
import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
        <div className='container-fluid container-fluid--primary header__scroll'>
            <div className='container'>
                <Header />
            </div>
        </div>
        <div className='container-fluid container-fluid--primary'>
            <div className='container'>
                <Hero />
            </div>
        </div>
        <div className='container-fluid container-fluid--secondary'>
            <div className='container'>
                <Servicos />
            </div>
        </div>
        <div className='container-fluid container-fluid--third'>
            <div className='container'>
                <Sobre />
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container'>
                <Contato />
            </div>
        </div>
        <div className='container-fluid container-fluid--four'>
            <div className='container'>
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
