import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(34, 40, 49);
    font-family: "Roboto", sans-serif;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <Main>
          <Grid>
            {images.map((image, index) => (
              <React.Fragment key={index}>
                {image.external ? (
                  <a href={image.url} target="_blank" rel="noopener noreferrer">
                    <Card style={{ backgroundImage: `url(${image.src})` }}>
                      <Content>{image.name}</Content>
                    </Card>
                  </a>
                ) : (
                  <Card
                    style={{ backgroundImage: `url(${image.src})` }}
                    onClick={() => handleImageClick(image.url)}
                  >
                    <Content>{image.name}</Content>
                  </Card>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Main>
        <Footer />
      </div>
    </>
  );
};

const images = [
  {
    src: "https://i.postimg.cc/1XKhZmm9/11machin-illo-super-Jumbo-v3.jpg",
    url: "/weather",
    name: "Weather Forcast",
    external: false,
  },
  {
    src: "https://i.postimg.cc/pTtdBdyC/sesha-reddy-kovvuri-Go5q-DQJQSU4-unsplash.jpg",
    url: "/compass",
    name: "Compass",
    external: false,
  },
  {
    src: "https://i.postimg.cc/x1c76yzj/1692083278814.jpg",
    url: "/news",
    name: "News",
    external: false,
  },
  {
    src: "https://i.postimg.cc/mr7mnd24/0x0.webp",
    url: "/qrcode",
    name: "Link to QR",
    external: false,
  },
  {
    src: "https://i.postimg.cc/PqKwNZSZ/file-sharing.png",
    url: "/tempmail",
    name: "Temporary Mail",
    external: false,
  },
  {
    src: "https://i.postimg.cc/vmmmqKvg/speedtest-header-930x620.jpg",
    url: "/speedtest",
    name: "Speed Test",
    external: false,
  },
  {
    src: "https://images.unsplash.com/photo-1671566852010-67185f179793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    url: "https://cinemixmz.vercel.app/",
    name: "Movies & ..",
    external: true,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1671995576295-c94cb5c3fd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    url: "/radio",
    name: "Radio",
    external: false,
  },
  {
    src: "https://images.unsplash.com/photo-1687894986611-c116bcb6a400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXx3aXVfa1hzNGZwd3x8ZW58MHx8fHx8",
    url: "https://www.example9.com/",
    name: "Example 9",
    external: true,
  },
  {
    src: "https://images.unsplash.com/photo-1651608903386-8e918ff298f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.example10.com/",
    name: "Example 10",
    external: true,
  },
];

const Main = styled.main`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  display: flex;
  color: #fddf21;
  flex-direction: column;
  text-align: center;
  padding-top: 1rem;
  font-family: "Courier Prime", monospace;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 200px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default Home;
