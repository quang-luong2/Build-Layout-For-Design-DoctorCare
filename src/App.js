import './sass/app.scss'
import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';

function App() {
  return (
    <div className='App'>
        <div className='container-fluid container-fluid--primary'>
            <div className='container'>
                <Header />
                <Hero />
            </div>
        </div>
        <div className='container-fluid container-fluid--secondary'>
            <div className='container'>
                <Servicos />
            </div>
            
        </div>
    </div>
  );
}

export default App;
