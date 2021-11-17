import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
              <Link to='/Disclaimer' className='btnDisclaimer footersLinks'>
                      Disclaimer
                  </Link>
           <a className='fb footersLinks' href="http://www.m.me/Brob424/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-messenger"></i></a>
           <a className='github footersLinks' href="https://github.com/Brob424" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
           <a className='fb footersLinks' href="http://www.linkedin.com/in/Brob424b" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
            <p>©All Rights Reserved</p> 
        </div>
    )
}

export default Footer;