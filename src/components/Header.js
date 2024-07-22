import React from "react";
import styled from "styled-components";

function Header() {
  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #;
  `;

  const Logo = styled.img`
    height: 50px;
  `;

  const Title = styled.h1`
    font-size: 2.4rem;
    font-family: "Courier Prime", monospace;
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
    font-style: ${({ italic }) => (italic ? "italic" : "normal")};
    color: #BBCEA8;
    text-align: center;
    flex: 1;
  `;

  const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
  `;

  return (
    <HeaderContainer>
      <Logo
        src="https://i.postimg.cc/QMr5B0Fd/Untitled455555-1-removebg-preview.png"
        alt="Logo"
      />
      <CenterContainer>
        <Title bold>Trusty Tools</Title>
      </CenterContainer>
    </HeaderContainer>
  );
}

export default Header;
