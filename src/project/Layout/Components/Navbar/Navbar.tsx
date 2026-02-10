import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Drawer, Nav } from "./Components";

const Navbar = () => {
  const navigateTo = useNavigate();
  const [pathUrl, setPathUrl] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const onHomeClick = () => {
    if (location.pathname == "/") return scroll({ top: 0, behavior: "smooth" });
    setPathUrl("/");
    return navigateTo("/");
  };

  const onGalleryClick = () => {
    setPathUrl("/gallery");
    return navigateTo("/gallery");
  };

  const onContactUsClick = () => {
    setPathUrl("/contact-us");
    return navigateTo("/contact-us");
  };

  const onBookNowClick = () => {
    setPathUrl("/book-now");
    return navigateTo("/book-now");
  };

  return (
    <>
      <Nav
        params={{
          pathUrl,
          setIsOpen,
          onBookNowClick,
          onContactUsClick,
          onGalleryClick,
          onHomeClick,
        }}
      />
      <Drawer
        params={{
          isOpen,
          pathUrl,
          setIsOpen,
          onBookNowClick,
          onContactUsClick,
          onGalleryClick,
          onHomeClick,
        }}
      />
    </>
  );
};

export default Navbar;
