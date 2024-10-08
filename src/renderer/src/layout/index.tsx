import TopBar from "@renderer/components/TopBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopBar />
      
      <div className="w-full h-full container mx-auto">
        <Suspense fallback={<div>Đang tải...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
