import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingScreen from "../pages/screen/LandingScreen";
import HomePage from "../pages/screen/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
      {
        index: true,
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);
