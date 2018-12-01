import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing pages and page component
import MainPage from './components/Pages/Home';

//importing fontAwesome library
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faBars, faDirections, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
// library.add(fab, faBars, faDirections, faPhone, faClock)

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>

    </div>
  </Router>
);

export default App;

