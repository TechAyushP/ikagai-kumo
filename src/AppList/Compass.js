import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CompassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const CompassCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CompassNeedle = styled.div`
  width: 4px;
  height: 100px;
  background-color: red;
  position: absolute;
  transform-origin: bottom center;
  transform: rotate(${props => props.angle}deg);
  transition: transform 0.5s;
`;

const Heading = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const Compass = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleOrientation = (event) => {
      const alpha = event.alpha;
      setAngle(alpha);
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <CompassContainer>
      <Heading>Compass</Heading>
      <CompassCircle>
        <CompassNeedle angle={-angle} />
      </CompassCircle>
    </CompassContainer>
  );
};

export default Compass;
