import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import Body from './Components/Body/Body';

export default function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/resume" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
}