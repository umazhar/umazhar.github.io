import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  }

  return (
    <header id="landing_page_header">
        <Link to="/" className="umair_button"> 
            > ./umair
            <div className="logo__cursor"></div>
        </Link>

    
      <nav>
        <ul className="nav__links">
          <li><Link to="/"> home </Link></li>
          <li><Link to="/projects"> projects </Link></li>
          <li><Link to="/experience"> werk </Link></li>
          <li><Link to="/blog"> blog </Link></li>
        </ul>
      </nav>
      <p className="menu cta" onClick={handleMenuClick}>Menu</p>

      <div id="mobile__menu" className={`overlay ${isActive ? 'overlay--active' : ''}`}>
        <a className="close" onClick={handleMenuClick}>&times;</a>
        <div className="overlay__content">
          <Link to="/" onClick={handleMenuClick}> home </Link>
          <Link to="/projects" onClick={handleMenuClick}> projects </Link>
          <Link to="/experience" onClick={handleMenuClick}> werk </Link>
          <Link to="/blog" onClick={handleMenuClick}> blog </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
