import { Link } from 'react-router-dom';
import './Button.css'

const Button = () => {

    return(
        <li className="btnStart">
                  <Link to='/MedDatabase' className='btnCta'>
                      <button>Get Start</button>
                  </Link>
                  </li>
    )
}

export default Button;