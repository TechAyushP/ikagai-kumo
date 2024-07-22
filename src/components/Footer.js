import React from "react";
import styled from "styled-components";

function Footer() {
  const Words = styled.h1`
    font-size: 1rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
  `;

  const Mail = styled.h1`
    font-size: 1rem;
    margin-top: -2rem;
    margin-bottom: -2rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 100 : 50)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
    color: #00ADB5;

    a {
      color: #00ADB5;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <footer className="footer">
     
        <div className="footer-section logo-section">
     
          
              <Mail>
                <a href="https://mdzaid.us.kg" target="_blank">
                ©Trusty Tools | mdzaid.us.kg |
                </a>
                <a href="mailto:info@mdzaid.us.kg"> info@mdzaid.us.kg</a>
              </Mail>
            </div>
          
       
      
    </footer>
  );
}

export default Footer;
