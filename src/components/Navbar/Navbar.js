import './Navbar.css';
import hamburger from '../../assets/hamburger.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar">
      <span>Crypto</span>
      <img onClick={() => setIsNavExpanded(!isNavExpanded)} src={hamburger} className="hamburger" />
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <Link to="home" smooth={true}><li><a href="">Home</a></li></Link>
        <Link to="about" smooth={true}><li><a href="">About Us</a></li></Link>
        <Link to="daz" smooth={true}><li><a href="">Decentralised Art Zone</a></li></Link>
        <Link to="contact" smooth={true}><li><a href="">Contact Us</a></li></Link>
      </ul>
    </div>
  )
};

export default Navbar;
