import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
