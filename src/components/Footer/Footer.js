import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container grid">
        <div className="company">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Careers Us</li>
          </ul>
        </div>
        <div className="contact">
          <h4>CONTACT</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="legal">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
