import React from "react";
import styled from "styled-components";

function Footer() {
  const Words = styled.h1`
    font-size: 1rem;
    margin-top: -1.6rem;
    margin-bottom: -1rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
  `;

  const Mail = styled.h1`
    font-size: 1rem;
    margin-top: -0.4rem;
    margin-bottom: -5.2rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
    color: orange;

    a {
      color: orange;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <footer className="footer">
      <div className="footer-content">
        <Words>
          <p style={{ color: "orange" }}>Ikigai Kumo: Purpose Cloud</p>
          Dive into our comprehensive suite of APIs implementations, designed to
          inspire and facilitate application development. Experience unmatched
          ease-of-use, seamless integration, and join a thriving community of
          developers.
        </Words>
        <div className="footer-section logo-section">
          <div className="footer-description">
            <div className="footer-section ul li a:hover">
              <Mail>
                <a href="https://mdzaid.us.kg" target="_blank">
                  mdzaid.us.kg |
                </a>
                <a href="mailto:info@mdzaid.us.kg"> info@mdzaid.us.kg</a>
              </Mail>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
