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
                    |mdzaid.us.kg|  
                </a>
                
                <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="16" height="16" fill="red">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <a href="mailto:info@mdzaid.us.kg">|info@mdzaid.us.kg|    </a>

              </Mail>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
