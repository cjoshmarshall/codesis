import React from "react";
import "./index.css";

import AboutUs from "../../components/modules/AboutUs";
import Footer from "../../components/modules/Footer";
import Navbar from "../../components/modules/Navbar";
import NavbarLinks from "../../components/templates/NavbarLinks";
import NavbarButtons from "../../components/templates/NavbarButtons";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import ImageDP from "../../assets/image-dp.png";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="home-container">
        <div className="home-subcontainer">
          <div className="home-navbarLinks">
            <NavbarLinks />
          </div>
          <div className="home-innercontainer">
            <h4 className="home-prefix">
              <span></span>
              <p>Welcome to the</p>
            </h4>
            <h1 className="home-title">
              Unprecedented Era of <span>Real Estate Investing</span>
            </h1>
            <h4 className="home-description">
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets
            </h4>
            <button className="home-button">Start Investing Now</button>
            <div className="home-innermostcontainer">
              <div className="">
                <div>658+</div>
                <p>Properties Registered</p>
              </div>
              <div className="">
                <div>685+</div>
                <p>Deals Cracked</p>
              </div>
              <div className="">
                <div>255+</div>
                <p>Investors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-subcontainer_phones">
          <div className="home-innercontainer_phone">
            <div className="home-container_phone1">
              <div className="home-subcontainer_phone1">
                <h4 className="home-title_phone1">Investments</h4>
                <div className="home-innercontainer_phone1">
                  <div className="home-container_phone1_image1">
                    <img src={Image1} alt="" className="home-image" />
                    <div className="home-innermostcontainer_phone1">
                      <h4 className="home-subtitle_phone1">Aurora</h4>
                      <p className="home-address_phone1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <p className="home-yield_phone1">
                        <b>+ 3,5%</b> Yield
                      </p>
                    </div>
                  </div>
                  <div className="home-innermostcontainer_phone1_details">
                    <div>
                      <p>Committed</p>
                      <p>
                        <b>$219,278</b>
                      </p>
                    </div>
                    <div>
                      <p>Distribution</p>
                      <p>
                        <b>$710,568</b>
                      </p>
                    </div>
                    <div>
                      <p>Contribution</p>
                      <p>
                        <b>$928,541</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-innercontainer_phone1">
                  <div className="home-container_phone1_image1">
                    <img src={Image2} alt="" className="home-image" />
                    <div className="home-innermostcontainer_phone1">
                      <h4 className="home-subtitle_phone1">
                        Geminin Appartment
                      </h4>
                      <p className="home-address_phone1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <p className="home-yield_phone1">
                        <b>+ 3,5%</b> Yield
                      </p>
                    </div>
                  </div>
                  <div className="home-innermostcontainer_phone1_details">
                    <div>
                      <p>Committed</p>
                      <p>
                        <b>$219,278</b>
                      </p>
                    </div>
                    <div>
                      <p>Distribution</p>
                      <p>
                        <b>$710,568</b>
                      </p>
                    </div>
                    <div>
                      <p>Contribution</p>
                      <p>
                        <b>$928,541</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-innercontainer_phone1">
                  <div className="home-container_phone1_image1">
                    <img src={Image3} alt="" className="home-image" />
                    <div className="home-innermostcontainer_phone1">
                      <h4 className="home-subtitle_phone1">Genisis</h4>
                      <p className="home-address_phone1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <p className="home-yield_phone1">
                        <b>+ 3,5%</b> Yield
                      </p>
                    </div>
                  </div>
                  <div className="home-innermostcontainer_phone1_details">
                    <div>
                      <p>Committed</p>
                      <p>
                        <b>$219,278</b>
                      </p>
                    </div>
                    <div>
                      <p>Distribution</p>
                      <p>
                        <b>$710,568</b>
                      </p>
                    </div>
                    <div>
                      <p>Contribution</p>
                      <p>
                        <b>$928,541</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-innercontainer_phone">
            <div className="home-container_phone2">
              <img src={Image1} alt="" className="home-image_phone2" />
              <img src={ImageDP} alt="" className="home-image_dp" />
              <h4 className="home-name_phone2">Julie Craig</h4>
              <p className="home-profession_phone2">Investor</p>
              <div className="home-subcontainer_phone2">
                <div className="home-innercontainer_phone2 home-deals">
                  <p className="home-number_p1">68</p>
                  <p className="home-text_p1">Deals</p>
                </div>
                <div className="home-innercontainer_phone2 home-match">
                  <p className="home-number_p2">80%</p>
                  <p className="home-text_p2">Match</p>
                </div>
              </div>
              <div className="home-subcontainer_phone2">
                <div className="home-innercontainer_phone2">
                  <p className="home-number_p3">$ 350,000</p>
                  <p className="home-text_p3">Borrowed</p>
                </div>
                <div className="home-innercontainer_phone2">
                  <p className="home-number_p4">
                    $ 184,000<span>62%</span>
                  </p>
                  <p className="home-text_p4">Paid</p>
                </div>
              </div>
              <div className="home-subcontainer_phone2">
                <div className="home-innercontainer_phone2">
                  <p className="home-number_p5">
                    $ 166,000<span>38%</span>
                  </p>
                  <p className="home-text_p5">Earned</p>
                </div>
                <div className="home-innercontainer_phone2">
                  <p className="home-number_p6">
                    12<span>Months</span>
                  </p>
                  <p className="home-text_p6">Loan Term</p>
                </div>
              </div>

              <div className="home-subcontainer_phone2 home-collaborators">
                <div className="home-collaborators_images">
                  <p>+14</p>
                  <p>A</p>
                  <p>B</p>
                  <p>C</p>
                  <p>A</p>
                  <p>B</p>
                </div>
                <p>19 Collaborators</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-subcontainer home-subcontainer_2">
          <div className="home-navbarButtons">
            <NavbarButtons />
          </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
