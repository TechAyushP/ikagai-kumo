import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import styled, { createGlobalStyle } from "styled-components";

export default function CipherCompass() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const [pointDegree, setPointDegree] = useState(0);
  const [compassCircleTransformStyle, setCompassCircleTransform] = useState(
    "translate(-50%, -50%)"
  );
  const [myPointStyle, setMypointStyle] = useState(0);

  const locationHandler = (coords) => {
    const { latitude, longitude } = coords;
    const resP = calcDegreeToPoint(latitude, longitude);
    console.log("resP", resP);
    if (resP < 0) {
      setPointDegree(resP + 360);
    } else {
      setPointDegree(resP);
    }
  };

  useEffect(() => {
    if (!isGeolocationAvailable) {
      alert("Your browser does not support Geolocation");
    } else if ((!isGeolocationEnabled, coords)) {
      locationHandler(coords);
    }
    startCompass();
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  const isIOS = () => {
    return (
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
      navigator.userAgent.match(/AppleWebKit/)
    );
  };

  const GlobalStyle = createGlobalStyle`
    body {
      background: rgb(172, 221, 231);
      font-family: "Roboto", sans-serif;
    }
  `;

  const calcDegreeToPoint = (latitude, longitude) => {
    const point = {
      lat: 21.422487,
      lng: 39.826206,
    };

    const phiK = (point.lat * Math.PI) / 180.0;
    const lambdaK = (point.lng * Math.PI) / 180.0;
    const phi = (latitude * Math.PI) / 180.0;
    const lambda = (longitude * Math.PI) / 180.0;
    const psi =
      (180.0 / Math.PI) *
      Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) -
          Math.sin(phi) * Math.cos(lambdaK - lambda)
      );
    return Math.round(psi);
  };

  const startCompass = async () => {
    const checkIos = isIOS();
    if (checkIos) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handler, true);
          } else {
            alert("has to be allowed!");
          }
        })
        .catch(() => alert("not supported"));
    } else {
      window.addEventListener("deviceorientationabsolute", handler, true);
    }
  };

  const handler = (e) => {
    const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    const compassCircleTransform = `translate(-50%, -50%) rotate(${-compass}deg)`;
    setCompassCircleTransform(compassCircleTransform);

    if (
      (pointDegree < Math.abs(compass) &&
        pointDegree + 15 > Math.abs(compass)) ||
      pointDegree > Math.abs(compass + 15) ||
      pointDegree < Math.abs(compass)
    ) {
      setMypointStyle(0);
    } else if (pointDegree) {
      setMypointStyle(1);
    }
  };

  console.log("coords:", coords);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CompassContainer>
          {/* <Heading>Qibla Compass</Heading> */}
          <Compass>
            <Arrow className="arrow" />
            <CompassCircle
              className="compass-circle"
              style={{ transform: compassCircleTransformStyle }}
            />
            {/* <MyPoint className="my-point" style={{ opacity: myPointStyle }} /> */}
          </Compass>
          {/* <StartButton onClick={startCompass}>Start Compass</StartButton> */}
          {/* <InfoText>
            A green dot will pop up in middle when the direction is towards
            Qibla.
          </InfoText> */}
          <InfoText>Info@mdzaid.us.kg</InfoText>
        </CompassContainer>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const CompassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-family: "Courier Prime", monospace;
`;

const Compass = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-width: 30px 20px 0 20px;
  border-color: red transparent transparent transparent;
  z-index: 1;
`;

const CompassCircle = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  background: url(https://purepng.com/public/uploads/large/purepng.com-compasscompassinstrumentnavigationcardinal-directionspointsdiagram-1701527842316onq7x.png)
    center no-repeat;
  background-size: contain;
`;

const MyPoint = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(8, 223, 69);
  border-radius: 50%;
  transition: opacity 0.5s ease-out;
`;

const StartButton = styled.button`
  // margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const InfoText = styled.p`
  margin-top: 1rem;
  color: #555;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: "Courier Prime", monospace;
`;
