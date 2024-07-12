import React from "react";
import styled from "styled-components";

function Footer() {
  const Words = styled.h1`
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
  `;
  return (
    <footer className="footer">
      <div className="footer-content">
        <Words>
          
          Odoo is a comprehensive suite of open-source APIs and implementations,
          that can inspire and facilitate application development. Odoo's unique
          value lies in its combination of exceptional ease-of-use and full
          integration and a large community.
        </Words>
        <div className="footer-section logo-section">
          <div className="footer-description">
            <div className="social-media">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
