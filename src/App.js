import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import Alumni from './pages/Alumni';
import Events from './pages/Events';
import { ReachUs } from './pages/ReachUs';


function App() {
  return (
    <div className='overflow-hidden ' >
      <Navbar />
      <div className=' flex mx-auto z-0'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Alumni' element={<Alumni/>} />
          <Route path='/Events' element={<Events/>} />
          <Route path="/ReachUs" element={<ReachUs />} />
        </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
