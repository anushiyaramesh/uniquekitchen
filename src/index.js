import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import KitchensPage from './KitchensPage';
import BedroomsPage from './BedroomsPage';
import OurWorks from './Ourworks';
import Slough from './components/Slough';
import Wymouth from './components/Wymouth';
import Wrayfield from './components/Wrayfield';
import Whittingtion from './components/Whittingtion';
import Pearclose from './components/Pearclose';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
<Navbar />
  {/* <Hero /> */}

 <Routes>
<Route path='/' element={<Home />} />    
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services />} />
<Route path="/kitchenspage" element={<KitchensPage />} />
<Route path="/bedroompage" element={<BedroomsPage />} />
<Route path="/ourworks" element={<OurWorks />} />
<Route path="/slough" element={<Slough />} />
<Route path="/wymouth" element={<Wymouth />} />
<Route path="/wrayfield" element={<Wrayfield />} />
<Route path="/whittingtion" element={<Whittingtion />} />
<Route path="/pearclose" element={<Pearclose />} />

  </Routes>
<Footer />
</Router>
);

