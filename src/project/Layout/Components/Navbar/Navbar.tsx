import { useState } from "react";
import { Drawer, Nav } from "./Components";
import type { INavbarPaths } from "../../../../@types/INavbarPaths.interface";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const paths: INavbarPaths[] = [
    {
      pathUrl: "/",
      title: "Home",
    },
    {
      pathUrl: "/gallery",
      title: "Gallery",
    },
    {
      pathUrl: "/store",
      title: "Store",
    },
    {
      pathUrl: "/contact-us",
      title: "Contact Us",
    },
  ];

  return (
    <>
      <Nav
        drawer={{
          setIsOpen,
        }}
        paths={paths}
      />
      <Drawer
        paths={paths}
        drawer={{
          isOpen,
          setIsOpen,
        }}
      />
    </>
  );
};

export default Navbar;
