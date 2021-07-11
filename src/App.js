import React, { useState } from 'react'
import './App.scss';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import PortfolioPage from './Pages/PortfolioPage';

function App() {
  const [toggle, setToggle] = useState(false);

  const navClick = () => {
    setToggle(!toggle);
  }
  return (
    <div className='App'>
      <div className={`sidebar ${toggle ? 'nav-active' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
            <Route exact path='/blogs' component={BlogPage} />
            <Route exact path='/contact' component={ContactPage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
