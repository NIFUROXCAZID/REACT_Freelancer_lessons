import { Outlet } from "react-router";
import Nav from "@/components/Nav";

function MainLayout() {
  return (
    <div className="container">
      <Nav/>
      <Outlet />
    </div>
  );
}

export default MainLayout;
