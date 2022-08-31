import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-border">
        <div className="footer-section">
          <div className="logo-nav">
            <h3 className="logo-text1">
              PHONEBAE
              <MdPhoneIphone style={{ color: "white" }} />
            </h3>
          </div>
          <div className="term">
            <ul className="terms-section">
              <li>Terms of Use</li>
              <li>Privacy Notice</li>
              <li>Cookie Policy</li>
              <li>Do not sell info</li>
            </ul>
          </div>
          <div className="developer">
            <h3 className="logo-text2">
              Developer Detail
              <MdDeveloperMode style={{ color: "white" }} />
            </h3>
            <ul className="dev-detail">
              <li>Kaung Myat</li>
              <li>aungakm667@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
