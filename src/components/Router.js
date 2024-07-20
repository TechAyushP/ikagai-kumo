import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WeatherAPI from "../AppList/WeatherAPI";
import Compass from "../AppList/Compass";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SpeedTest from "../AppList/SpeedTest";
import NewsApi from "../AppList/NewsApi";

import QrcodeGenerator from "../AppList/QrcodeGenerator";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/weather",
      element: <WeatherAPI />,
    },
    {
      path: "/compass",
      element: <Compass />,
    },
    {
      path: "/speedtest",
      element: <SpeedTest />,
    },
    {
      path: "/news",
      element: <NewsApi />,
    },
    {
      path: "/qrcode",
      element: <QrcodeGenerator />,
    },
  ]);
  return (
    <div>
      {/* <Header/> */}
      <RouterProvider router={routes} />
      {/* <Footer/> */}
    </div>
  );
}

export default Router;
