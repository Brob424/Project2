import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import './Navbar.css'

const Navbar = () => {


    return (
    <nav className='Navbar'>
        <div className='ham-menu'>
            <SideBar />
        </div>
        <div className='logo'>
          <Link to='/' className='nav-logo'>
              <h1><span>Med</span>Dex<i className="fas fa-capsules"></i></h1> 
          </Link>
          <div>
              <li className="nav-item">
                  <Link to='/' className='nav-links'>
                      Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/MedDatabase' className='nav-links'>
                      Medication Database
                  </Link>
              </li>
             <li className="nav-item">
                  <Link to='/AboutUs' className='nav-links'>
                      About Us
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

export default Navbar
