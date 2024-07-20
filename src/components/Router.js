import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WeatherAPI from "../AppList/WeatherAPI";
import Compass from "../AppList/Compass";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SpeedTest from "../AppList/SpeedTest";

import QrcodeGenerator from "../AppList/QrcodeGenerator";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/weatherapi",
      element: <WeatherAPI />,
    },
    {
      path: "/compassapi",
      element: <Compass />,
    },
    {
      path: "/news",
      element: <NewsApi/>,
    }
    
    
  ]);
  return <div>
    {/* <Header/> */}
    <RouterProvider router={routes} />
    {/* <Footer/> */}
  </div>;
}

export default Router;
