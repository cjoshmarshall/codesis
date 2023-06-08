import React from "react";
import "./index.css";

function NavbarLinks() {
  return (
    <div className="navbarlinks-container">
      <div>logo</div>
      <ul className="navbarlinks-subcontainer">
        <li className="navbarlinks-list_option">Home</li>
        <li className="navbarlinks-list_option">Network</li>
        <li className="navbarlinks-list_option">Product</li>
        <li className="navbarlinks-list_option">Technology</li>
        <li className="navbarlinks-list_option">Our Story</li>
        <li className="navbarlinks-list_option">Knowledge Center</li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
