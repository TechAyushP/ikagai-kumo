import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// Styled-components for each CSS class
const CompassContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Box = styled.div`
  width: 200px;
  margin: 0 auto;
  position: relative;
`;

const circleStyles = css`
  position: absolute;
  border-radius: 100%;
`;

const CircleOne = styled.div`
  ${circleStyles}
  width: 250px;
  height: 250px;
  background: #3a3f4a;
  margin: 3px 0 0 3px;
  box-shadow: inset -8px 0px 7px rgba(255, 255, 255, 0.4);
`;

const CircleTwo = styled.div`
  ${circleStyles}
  width: 140px;
  height: 140px;
  background: #e0e1e3;
  margin: 55px 0px 0 55px;
  z-index: 1;
  border: solid 3px transparent;
  box-shadow: inset 12px 0px 21px rgba(0,0,0,0.4);
`;

const CircleThree = styled.div`
  ${circleStyles}
  width: 220px;
  height: 220px;
  background: #e0e1e3;
  margin: 15px 0 0 15px;
  border: solid 3px transparent;
  box-shadow: inset 12px 0px 21px rgba(0,0,0,0.4);
`;

const CircleFour = styled.div`
  ${circleStyles}
  width: 36px;
  height: 36px;
  background: #aeadb0;
  z-index: 3;
  margin: 111px 0 0 111px;
  box-shadow: inset 7px 0px 9px rgba(0,0,0,0.4);
`;

const triangleStyles = css`
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
`;

const TriangleTop = styled.div`
  ${triangleStyles}
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 93px solid #fa2d30;
  transform: rotate(-22deg);
  margin: 37px 0 0 94px;
`;

const TriangleTopShadow = styled.div`
  ${triangleStyles}
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 93px solid rgba(0, 0, 0, 0.15);
  transform: rotate(-22deg);
  margin: 37px 0 0 94px;
`;

const TriangleBottom = styled.div`
  ${triangleStyles}
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-top: 93px solid #979591;
  transform: rotate(-22deg);
  margin: 125px 0 0 130px;
`;

const TriangleWest = styled.div`
  ${triangleStyles}
  margin: 113px 0 0 66px;
  border-top: 15px solid transparent;
  border-right: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const TriangleEast = styled.div`
  ${triangleStyles}
  margin: 113px 0 0 129px;
  border-top: 15px solid transparent;
  border-left: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const TriangleSouth = styled.div`
  ${triangleStyles}
  margin: 130px 0 0 114px;
  border-left: 15px solid transparent;
  border-top: 61px solid #fff;
  border-right: 15px solid transparent;
`;

const TriangleNorth = styled.div`
  ${triangleStyles}
  margin: 65px 0 0 114px;
  border-left: 15px solid transparent;
  border-bottom: 61px solid #fff;
  border-right: 15px solid transparent;
`;

const TriangleNW = styled.div`
  ${triangleStyles}
  margin: 95px 0 0 81px;
  transform: rotate(45deg);
  border-top: 15px solid transparent;
  border-right: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const TriangleNE = styled.div`
  ${triangleStyles}
  margin: 95px 0 0 116px;
  transform: rotate(135deg);
  border-top: 15px solid transparent;
  border-right: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const TriangleSE = styled.div`
  ${triangleStyles}
  margin: 129px 0 0 116px;
  transform: rotate(225deg);
  border-top: 15px solid transparent;
  border-right: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const TriangleSW = styled.div`
  ${triangleStyles}
  margin: 129px 0 0 81px;
  transform: rotate(315deg);
  border-top: 15px solid transparent;
  border-right: 61px solid #fff;
  border-bottom: 15px solid transparent;
`;

const directionStyles = css`
  position: absolute;
  color: #fff;
  font-family: "Arial Black", sans-serif;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.35);
`;

const North = styled.p`
  ${directionStyles}
  margin: 18px 0 0 121px;
`;

const South = styled.p`
  ${directionStyles}
  margin: 213px 0 0 123px;
`;

const West = styled.p`
  ${directionStyles}
  margin: 116px 0 0 26px;
`;

const East = styled.p`
  ${directionStyles}
  margin: 116px 0 0 220px;
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
      <Box>
        <CircleOne />
        <CircleThree />
        <CircleTwo />
        <CircleFour />
        <TriangleTop />
        <TriangleTopShadow />
        <TriangleBottom />
        <TriangleWest />
        <TriangleEast />
        <TriangleSouth />
        <TriangleNorth />
        <TriangleNW />
        <TriangleNE />
        <TriangleSE />
        <TriangleSW />
        <North>N</North>
        <South>S</South>
        <West>W</West>
        <East>E</East>
        <CompassNeedle angle={-angle} />
      </Box>
    </CompassContainer>
  );
};

export default Compass;
