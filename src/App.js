import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Technology from './Pages/Technology';
import Contact from './Pages/Contact';
import Nero from './Pages/Nero';
import Bubble from './Pages/Bubble';
import Drizzle from './Pages/Drizzle';
import Thunder from './Pages/Thunder';
import Airwell from './Pages/Airwell';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/nero' element={<Nero />} />
          <Route path='/bubble' element={<Bubble />} />
          <Route path='/drizzle' element={<Drizzle />} />
          <Route path='/thunder' element={<Thunder />} />
          <Route path='/airwell' element={<Airwell />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
