import React from "react";
import "./index.css";
import NavbarLinks from "../../templates/NavbarLinks";
import NavbarButtons from "../../templates/NavbarButtons";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-subcontainer_navbarLinks">
        <NavbarLinks />
      </div>
      <div className="navbar-subcontainer_navbarButtons">
        <NavbarButtons />
      </div>
    </div>
  );
}

export default Navbar;
