import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";

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
    } else if (!isGeolocationEnabled) {
      alert(
        "Geolocation is not enabled, Please allow the location check your setting"
      );
    } else if (coords) {
      locationHandler(coords);
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  const isIOS = () => {
    return (
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
      navigator.userAgent.match(/AppleWebKit/)
    );
  };

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
    <div className="App">
      <div>myPointStyle:{myPointStyle}</div>
      <div>pointDegree:{pointDegree}</div>
      <div>coords?.latitude:{coords?.latitude}</div>
      <div>coords?.longitude:{coords?.longitude}</div>
      <h1>Hello CodeSandbox</h1>
      <div className="compass">
        <div className="arrow" />
        <div
          className="compass-circle"
          style={{ transform: compassCircleTransformStyle }}
        />
        <div className="my-point" style={{ opacity: myPointStyle }} />
      </div>
      <button className="start-btn" onClick={startCompass}>
        Start compass
      </button>
      <style jsx>{`
        .App {
          font-family: sans-serif;
          text-align: center;
        }
        .compass {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          margin: auto;
        }
        .compass > .arrow {
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
        }
        .compass > .compass-circle,
        .compass > .my-point {
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
        }
        .compass > .my-point {
          opacity: 0;
          width: 20%;
          height: 20%;
          background: rgb(8, 223, 69);
          border-radius: 50%;
          transition: opacity 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
