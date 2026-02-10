import { useState } from "react";
import type { INavbarPaths } from "../../../../../@types/INavbarPaths.interface";
import { useNavigate } from "react-router-dom";

const Drawer = ({
  drawer,
  paths,
}: {
  drawer: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  paths: INavbarPaths[];
}) => {
  const [, setPathUrl] = useState(location.pathname);
  const navigateTo = useNavigate();
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => drawer.setIsOpen(false)}
        className={`
    fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
    ${drawer.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
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
    ${drawer.isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="p-6 flex flex-col gap-6 text-white h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => drawer.setIsOpen(false)}
              className="text-xl hover:text-amber-400 transition"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>

          <div className="h-px bg-neutral-800 my-2" />

          {/* Links */}

          {paths.map((path, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  drawer.setIsOpen(false);
                  setPathUrl(path.pathUrl);
                  return navigateTo(path.pathUrl);
                }}
                className={`text-left py-2 transition ${
                  path.pathUrl === location.pathname
                    ? "text-amber-500"
                    : "hover:text-amber-400"
                }`}
              >
                {path.title}
              </button>
            );
          })}

          {/* CTA */}
          <button
            onClick={() => {
              drawer.setIsOpen(false);
              setPathUrl("/book-now");
              return navigateTo("/book-now");
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

export default Drawer;
