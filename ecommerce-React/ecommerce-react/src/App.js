import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <NavBar/>
        <Routes> {/* Use Routes to define Route components */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
