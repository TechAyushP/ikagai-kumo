import React from "react";
import styled from "styled-components";
import { useHistory, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Title>API DUMP: Explore and Play!</Title>
      <Main>
        <Grid>
          {images.map((image, index) => (
            <Card
              key={index}
              style={{ backgroundImage: `url(${image.src})` }}
              onClick={() => handleImageClick(image.url)}
            >
              <Content>{`Image ${index + 1}`}</Content>
            </Card>
          ))}
        </Grid>
      </Main>
    </div>
  );
};
const images = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1670793631007-e86c6ddfd812?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    url: "/weatherapi",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1711539924968-81d3382a85d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.google.com/",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1685082778205-8665f65e8c2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.example3.com/",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1712145078393-665300b197e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.example4.com/",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1712039658651-e0ebe853d103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.example5.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1615390265246-72d3198a48b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  //   url: "https://www.example6.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1671566852010-67185f179793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example7.com/",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1671995576295-c94cb5c3fd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example8.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1687894986611-c116bcb6a400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXx3aXVfa1hzNGZwd3x8ZW58MHx8fHx8",
  //   url: "https://www.example9.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1651608903386-8e918ff298f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.example10.com/",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.example11.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example12.com/",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w2fHx8ZW58MHx8fHx8",
  //   url: "https://www.example13.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example14.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
  //   url: "https://www.example15.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1502754388-a9bce5374fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example16.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  //   url: "https://www.example17.com/",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1503197979108-c824168d51a8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.example18.com/",
  // },
];

const Main = styled.main`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  display: flex;
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
