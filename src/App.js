import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavTabs';
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
export default App;

