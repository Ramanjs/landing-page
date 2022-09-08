import './Navbar.css';
import hamburger from '../../assets/hamburger.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar">
      <span>Crypto</span>
      <img onClick={() => setIsNavExpanded(!isNavExpanded)} src={hamburger} className="hamburger" />
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <Link to="/" smooth={true}><li><a href="">Home</a></li></Link>
        <Link to="/work" smooth={true}><li><a href="">Our Work</a></li></Link>
        <Link to="/team" smooth={true}><li><a href="">Team</a></li></Link>
      </ul>
    </div>
  )
};

export default Navbar;
