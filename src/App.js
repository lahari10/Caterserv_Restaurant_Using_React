import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import NavigationBar from './Components/HomeHero/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogPost from './Components/Blog/BlogPost';
import BlogList from './Components/Blog/BlogList';
import posts from './Components/Blog/posts';


const App = () => {
  return (
    
        <Router>
          <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
            <NavigationBar/>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList posts={posts} />} />
            <Route path="/blog/:postId" element={<BlogPost posts={posts} />} />
          </Routes>
          <Footer />
        </Router>
     
  );
}

export default App;
