import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <div>Header</div>
      <div className="b">
        {" "}
        <Outlet />
      </div>
      <div className="flex-1" />
      <div>footer</div>
    </div>
  );
};

export default Layout;
