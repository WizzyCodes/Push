import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingScreen from "../pages/screen/LandingScreen";
import HomePage from "../pages/screen/HomePage";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

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
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
