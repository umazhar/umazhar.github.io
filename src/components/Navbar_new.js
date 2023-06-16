import React, { useState } from 'react';
import "../styles/Navbar_new.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  }

  return (
    <header id="landing_page_header">
      {/* <a className="logo" href="/"><img src="assets/andrew.png" alt="logo" width="150px" /></a> */}
      <a className = "umair_button">
        > ./Umair
        <div className="logo__cursor"></div>
    </a>
      <nav>
        <ul className="nav__links">
          <li><Link to="/"> ./home </Link></li>
          <li><Link to="/projects"> ./projects </Link></li>
          <li><a href="pages/blog.html">Blog</a></li>
        </ul>
      </nav>
      <p className="menu cta" onClick={handleMenuClick}>Menu</p>

      <div id="mobile__menu" className={`overlay ${isActive ? 'overlay--active' : ''}`}>
        <a className="close" onClick={handleMenuClick}>&times;</a>
        <div className="overlay__content">
          <a href="pages/about.html">About</a>
          <a href="pages/projects.html">Projects</a>
          <a href="pages/blog.html">Blog</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
