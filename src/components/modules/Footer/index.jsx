import React from "react";
import "./index.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-subcontainer">
        <div className="footer-innercontainer_email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            className="footer-email"
          />
          <button className="footer-button footer-button_email">
            Subscribe To Newsletter
          </button>
        </div>
        <h2 className="footer-description">
          Signup and start enjoying the benefits today!
        </h2>
        <button className="footer-button footer-button_signup">
          Sign Up To Lilypads
        </button>
        <ul className="footer-innercontainer footer-innercontainer_icons">
          <li className="footer-list_options footer-list_options_icon">F</li>
          <li className="footer-list_options footer-list_options_icon">I</li>
          <li className="footer-list_options footer-list_options_icon">L</li>
          <li className="footer-list_options footer-list_options_icon">Y</li>
          <li className="footer-list_options footer-list_options_icon">M</li>
          <li className="footer-list_options footer-list_options_icon">P</li>
        </ul>
      </div>
      <div className="footer-subcontainer footer-subcontainer_grid">
        <div className="footer-innercontainer">ICON</div>
        <div className="footer-innercontainer">
          <div>Reach Us At</div>
          <div className="footer-address">
            6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
          </div>
        </div>
        <div className="footer-innercontainer"></div>
        <div className="footer-innercontainer">
          <div>Network</div>
          <ul>
            <li className="footer-list_options">Community</li>
            <li className="footer-list_options">Investor</li>
            <li className="footer-list_options">Broker</li>
          </ul>
        </div>
        <div className="footer-innercontainer">
          <div>Product</div>
          <ul>
            <li className="footer-list_options">Invest</li>
            <li className="footer-list_options">Discover</li>
            <li className="footer-list_options">Transact</li>
            <li className="footer-list_options">Manage</li>
          </ul>
        </div>
        <div className="footer-innercontainer">
          <div>Our Story</div>
          <ul>
            <li className="footer-list_options">Approach</li>
            <li className="footer-list_options">AboutUs</li>
          </ul>
        </div>
        <div className="footer-innercontainer">
          <div>Technology</div>
          <ul>
            <li className="footer-list_options">Artificial Intelligence</li>
            <li className="footer-list_options">Block Chain</li>
          </ul>
        </div>
        <div className="footer-innercontainer">
          <div>Highlights</div>
          <ul>
            <li className="footer-list_options">
              Impact of COVID-19 on the food and beverage industry and the
              retail sector
            </li>
            <li className="footer-list_options">
              Commercial lending during COVID-19: navigating the impact
            </li>
          </ul>
        </div>
        <div className="footer-innercontainer">
          <div>Knowledge Center</div>
          <ul>
            <li className="footer-list_options">Resource</li>
            <li className="footer-list_options">Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
