import React from 'react'
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Notfound from './pages/not-found';
import Navbar from './components/utils/navbar';
import Listing from './pages/listing';
export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="py-[70px]">
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/jobs" element={<Listing/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
      </div>

    </div>
  )
}
