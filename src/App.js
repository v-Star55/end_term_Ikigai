import React from 'react';
import NavBar from './NavBar';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calculator from './Pages/Calculator';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

