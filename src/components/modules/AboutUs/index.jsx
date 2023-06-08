import React from "react";
import "./index.css";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-subcontainer aboutus-subcontainer_grid1">
        <div>
          <span></span>
          <p>About Us</p>
        </div>
        <h2>
          Lillypad is the only Real Estate Investment tool you need for your
          business
        </h2>
      </div>
      <div className="aboutus-subcontainer aboutus-subcontainer_grid2">
        <h4 className="aboutus-title">Become a Data-Driven Investor</h4>
        Lilypads is the cloud-based real estate investment platform that helps
        you make data-driven investment decisions and assists with reaching your
        long term investment objectives.
      </div>
      <div className="aboutus-subcontainer aboutus-subcontainer_grid3">
        <h4 className="aboutus-title">
          Lilypads can help you make smarter decisions.
        </h4>
        Streamline your investment evaluation process and collaborate in
        reaching your long term investment objectives
      </div>
      <div className="aboutus-subcontainer aboutus-subcontainer_grid4">
        <h4 className="aboutus-title">Manager Due Diligence</h4>Evaluate
        managers against your objectives using traditional risk metrics with the
        addition of factor analysis. All it takes is a set of returns
      </div>
      <div className="aboutus-subcontainer aboutus-subcontainer_grid5">
        <h4 className="aboutus-title">Optimize Asset Allocation</h4>Understand
        the underlying risk drivers in your portfolio using the Lilypads
        analysis factors and then optimize that portfolio based on objectives
      </div>
      <div className="aboutus-subcontainer aboutus-subcontainer_grid6">
        <h4 className="aboutus-title">Our Subscribers</h4>Serving a
        constellation of global subscribers Pension funds, Funds of Funds,
        Banks, Family offices, Asset managers, Wealth Managers
      </div>
    </div>
  );
}

export default AboutUs;
