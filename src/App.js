import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Project from "./Project";
import Home from './Home';
import About from './About'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWithRouter;
