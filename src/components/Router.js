import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WeatherAPI from "../AppList/WeatherAPI";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

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
  ]);
  return <div>
    <Header/>
    <RouterProvider router={routes} />
    <Footer/>
  </div>;
}

export default Router;
