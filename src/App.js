import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Pages/Footer/Footer';

//importing fontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faDirections, faPhone, faClock, faEnvelope, faSquare, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faBars, faDirections, faPhone, faClock, faEnvelope, faSquare, faFolderOpen)

const App = () => (
  <Router>
    <div>
      {/* <LandingPage /> */}
      <Navbar />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
);
export default App;

