import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const menuClose = () => setClick(false);



    return (
    <nav className='Sidebar'>
        <div className='logo'>
          <div className="hamburger" onClick={handleClick}>
            <i className={click ? 'far fa-times-circle' : 'fas fa-bars' }></i>
          </div>
          <div className="menu-links">
              <ul className={click ? 'nav-menu open' : 'nav-menu'}></ul>
              <li className="nav-item">
                  <Link to='/' className='nav-links-mobile' onClick={menuClose}>
                      <div className="menu-text">
                          Home
                      </div>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/MedDatabase' className='nav-links-mobile' onClick={menuClose}>
                      <div className="menu-text">
                          Medication Database
                      </div>
                  </Link>
              </li>
             <li className="nav-item">
                  <Link to='/AboutUs' className='nav-links-mobile' onClick={menuClose}>
                      <div className="menu-text">
                          About Us
                      </div>
                  </Link>
              </li> 
               {/*<li className="nav-item">
                  <Link to='/sign-up' className='nav-links' onClick={menuClose}>
                      Sign Up
                  </Link>
              </li> */}
          </div>
        </div>
    </nav>
    )
}

export default SideBar
