import { useState } from "react";
import type { INavbarPaths } from "../../../../../@types/INavbarPaths.interface";
import { useNavigate } from "react-router-dom";

const Nav = ({
  drawer,
  paths,
}: {
  drawer: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  paths: INavbarPaths[];
}) => {
  const [, setPathUrl] = useState(location.pathname);
  const navigateTo = useNavigate();
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold flex items-center justify-center gap-2">
            <span className="text-white">Photo House</span>
            <span className="text-amber-500">El-Iraqi</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-white">
            {paths.map((path, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setPathUrl(path.pathUrl);
                    return navigateTo(path.pathUrl);
                  }}
                  className={`${
                    path.pathUrl === location.pathname
                      ? "text-amber-600"
                      : "hover:text-amber-400"
                  } duration-150 ease-in-out  cursor-pointer`}
                >
                  {path.title}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              drawer.setIsOpen(false);
              setPathUrl("/book-now");
              return navigateTo("/book-now");
            }}
            className="hidden md:block bg-amber-600 px-4 py-2 rounded text-white cursor-pointer"
          >
            Book Now
          </button>

          {/* drawer */}
          <button
            onClick={() => drawer.setIsOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
