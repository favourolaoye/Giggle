import React from 'react'
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Notfound from './pages/not-found';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  )
}
