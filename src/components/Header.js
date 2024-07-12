import React from "react";
import styled from "styled-components";

function Header() {
  const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    text-align: center;
  `;

  return (
    <div className="header">
      <Title>生き甲斐 Ikigai Kumo 雲</Title>
    </div>
  );
}

export default Header;
