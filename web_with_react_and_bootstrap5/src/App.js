import './App.css';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from "./components/includes/Footer";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
};

