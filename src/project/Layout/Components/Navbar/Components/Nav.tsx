const Nav = ({
  params,
}: {
  params: {
    pathUrl: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onHomeClick: () => void | Promise<void>;
    onGalleryClick: () => void | Promise<void>;
    onContactUsClick: () => void | Promise<void>;
    onBookNowClick: () => void | Promise<void>;
  };
}) => {
  const links = [
    {
      pathUrl: "",
      title: "",
      onClick: () => {},
    },
  ];
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold flex items-center justify-center gap-2">
            <span className="text-yellow-600">El-Iraqi</span>
            <span className="text-white">Photo House</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-white">
            <button
              onClick={params.onHomeClick}
              className={`${
                params.pathUrl === "/"
                  ? "text-amber-600"
                  : "hover:text-amber-400"
              } duration-150 ease-in-out  cursor-pointer`}
            >
              Home
            </button>
            <button
              onClick={params.onGalleryClick}
              className={`${
                params.pathUrl === "/gallery"
                  ? "text-amber-600"
                  : "hover:text-amber-400"
              } duration-150 ease-in-out cursor-pointer`}
            >
              Gallery
            </button>
            <button
              onClick={params.onContactUsClick}
              className={`${
                params.pathUrl === "/contact-us"
                  ? "text-amber-600"
                  : "hover:text-amber-400"
              } duration-150 ease-in-out  cursor-pointer`}
            >
              Contact us
            </button>
          </div>
          <button
            onClick={params.onBookNowClick}
            className="hidden md:block bg-amber-600 px-4 py-2 rounded text-white cursor-pointer"
          >
            Book Now
          </button>

          {/* drawer */}
          <button
            onClick={() => params.setIsOpen(true)}
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
