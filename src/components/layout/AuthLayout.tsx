// import React from 'react'

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="w-full h-[60px] bg-white text-black flex "></div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
