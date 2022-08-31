import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import svgImg from "../images/about.svg";

function About() {
  return (
    <div>
      <Nav />
      <div className="about-section">
        <div className="about-section-border">
          <div className="about-section-main">
            <div className="up-about">
              {" "}
              <img className="svg-img" src={svgImg} alt="svg-img" />
            </div>
            <div className="down-about">
              <div className="down-about-left">
                <div className="about-text-divider">
                  <h3 className="about-text-title">
                    {" "}
                    <span style={{ color: "white" }}>About</span> Us
                  </h3>
                </div>
                <p className="about-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident labore corporis aliquid voluptate est hic ab sit
                  dolor quod error, animi sunt natus consequatur, quidem illum
                  porro. Suscipit, illo cupiditate!
                </p>
              </div>
              <div className="down-about-right">
                <div className="about-contact-divider">
                  <h3 className="about-contact-title">
                    {" "}
                    <span style={{ color: "white" }}>Contact</span> Us
                  </h3>
                </div>
                <span className="contact-text">
                  We will be glad to hear from you if:
                  <ul>
                    <li>
                      You have found a mistake in our phone specifications.
                    </li>
                    <li>
                      You have info about a phone which we don't have in our
                      database.
                    </li>
                    <li>You have found a broken link.</li>
                    <li>
                      You have a suggestion for improving PhoneBae page or you
                      want to request a feature.
                    </li>
                  </ul>
                  Contact to --{" "}
                  <span className="g-mail">PhoneBae9892@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
