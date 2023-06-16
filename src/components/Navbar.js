import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar_new.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {


  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        {/* <div className="logo__cursor"></div> */}
        <Link to="/"> ./home </Link>
        <Link to="/projects"> ./projects </Link>
        <Link to="/blog"> ./blog </Link>
        <div className="spacer"></div> 
      </div>
    </div>
  );
}

export default Navbar;
