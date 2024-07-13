import React from "react";
import styled from "styled-components";

function Footer() {
  const Words = styled.h1`
    font-size: 1rem;
    margin-top: -1.6rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
  `;
  const Mail = styled.h1`
  font-size: 1rem;
  margin-top: -0.40rem;
  margin-bottom: -3.2rem;
  font-family: "Courier Prime", monospace;
  font-weight: ${({ bold }) => (bold ? 100 : 50)};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-align: center;
  color: orange;
`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <Words>
        <p style={{color:'orange'}}>Ikigai Kumo: Purpose Cloud</p>Dive into our comprehensive suite of APIs implementations, designed to inspire and facilitate application development. Experience unmatched ease-of-use, seamless integration, and join a thriving community of developers.
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
            <div className="footer-section ul li a:hover">
              <Mail >contact@mdzaid.us.kg</Mail>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
