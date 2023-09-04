import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import BlogArticle1 from './components/BlogArticle1';
import BlogArticle2 from './components/BlogArticle2';
import BlogArticle3 from './components/BlogArticle3';
import BlogArticle4 from './components/BlogArticle4';
import BlogArticle5 from './components/BlogArticle5';

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
          <Route path="/blogs/blog-article-1" element={<BlogArticle1/>}></Route>
          <Route path="/blogs/blog-article-2" element={<BlogArticle2/>}></Route>
          <Route path="/blogs/blog-article-3" element={<BlogArticle3/>}></Route>
          <Route path="/blogs/blog-article-4" element={<BlogArticle4/>}></Route>
          <Route path="/blogs/blog-article-5" element={<BlogArticle5/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
