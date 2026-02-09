import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Navbar } from "./Components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
