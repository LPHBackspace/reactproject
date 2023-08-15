import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                Leleo <ion-icon name="aperture-outline"></ion-icon>
            </Link>
           
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign-up
                </Link>
              </li>
            </ul>

            <div className='menu-icon' onClick={handleClick}>
              <ion-icon name={click ? 'close-circle-outline' : 'menu-outline'}></ion-icon>
            </div>
            {button & <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
  )
}

export default Navbar