import React from 'react'
import image1 from '../img/Image1.jpg'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='nav'>
        <div className="profile">
          <img src={image1} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to='/' exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/portfolio' exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contact' exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>
            Made by John Katua.
          </p>
        </footer>
      </nav>
    </div>
  )
}

export default Navbar;
