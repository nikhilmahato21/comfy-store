import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl ">Comfy</span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
