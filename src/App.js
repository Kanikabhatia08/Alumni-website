import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { ContactUs } from './pages/ContactUs';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';


function App() {
  return (
    <div >
      <Navbar />
      <div className=' flex mx-auto z-0'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
