import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Notfound from './pages/not-found';
import Navbar from './components/utils/navbar';
import Jobs from './pages/jobs';
import Login from './auth/login';
import ForgetPassword from './auth/forget-password';
import EmailVerify from './auth/EmailVerify'
import SignUp from './auth/signup';



export default function App() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password', '/email-verify'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <div className={shouldHideNavbar ? '' : 'py-[70px]'}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}
