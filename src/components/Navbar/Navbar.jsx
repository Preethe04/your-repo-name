import React from 'react'
import './Navbar.css'
import logo from '../../assets/amor.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  return (
    <nav className='container'>
      
        <img src={logo} alt=" "className='logo'/>
        <ul>
            
            
            <li>
  <Link
    to="contact"
    smooth={true}
    duration={500}
    offset={-70}
  >
    <button className="btn">Contact us</button>
  </Link>
</li>

        </ul>
        
    </nav>
  )
}

export default Navbar
