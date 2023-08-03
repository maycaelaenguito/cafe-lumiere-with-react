import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Booking from './components/Booking';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/about/menu" element={<Menu/>}></Route>
          <Route path="/about/how-we-started" element={<AboutUs/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/contactus/booking" element={<Booking/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
