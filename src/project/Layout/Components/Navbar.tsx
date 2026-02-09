import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold flex items-center justify-center gap-2">
            <span className="text-gray-400">Captura</span>
            <span className="text-white">Production</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-white">
            <button
              onClick={onHomeClick}
              className={`${
                pathUrl === "/" ? "text-amber-600" : "hover:text-amber-400"
              } duration-150 ease-in-out  cursor-pointer`}
            >
              Home
            </button>
            <button
              onClick={onGalleryClick}
              className={`${
                pathUrl === "/gallery"
                  ? "text-amber-600"
                  : "hover:text-amber-400"
              } duration-150 ease-in-out cursor-pointer`}
            >
              Gallery
            </button>
            <button
              onClick={onContactUsClick}
              className={`${
                pathUrl === "/contact-us"
                  ? "text-amber-600"
                  : "hover:text-amber-400"
              } duration-150 ease-in-out  cursor-pointer`}
            >
              Contact us
            </button>
          </div>
          <button
            onClick={onBookNowClick}
            className="hidden md:block bg-amber-600 px-4 py-2 rounded text-white cursor-pointer"
          >
            Book Now
          </button>

          {/* drawer */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
    fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      ></div>

      {/* Drawer */}
      <div
        className={`
    fixed top-0 right-0 h-full w-80 z-50
    bg-neutral-900
    border-l border-neutral-800
    shadow-2xl
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="p-6 flex flex-col gap-6 text-white h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-amber-400 transition"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>

          <div className="h-px bg-neutral-800 my-2" />

          {/* Links */}
          <button
            onClick={() => {
              onHomeClick();
              setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              pathUrl === "/" ? "text-amber-500" : "hover:text-amber-400"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              onGalleryClick();
              setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              pathUrl === "/gallery" ? "text-amber-500" : "hover:text-amber-400"
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => {
              onContactUsClick();
              setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              pathUrl === "/contact-us"
                ? "text-amber-500"
                : "hover:text-amber-400"
            }`}
          >
            Contact Us
          </button>

          {/* CTA */}
          <button
            onClick={() => {
              onBookNowClick();
              setIsOpen(false);
            }}
            className="
        mt-auto
        bg-amber-600 hover:bg-amber-500
        py-3 rounded-lg
        text-white font-medium
        transition
      "
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
