const Drawer = ({
  params,
}: {
  params: {
    isOpen: boolean;
    pathUrl: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onHomeClick: () => void | Promise<void>;
    onGalleryClick: () => void | Promise<void>;
    onContactUsClick: () => void | Promise<void>;
    onBookNowClick: () => void | Promise<void>;
  };
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => params.setIsOpen(false)}
        className={`
    fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
    ${params.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
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
    ${params.isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="p-6 flex flex-col gap-6 text-white h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => params.setIsOpen(false)}
              className="text-xl hover:text-amber-400 transition"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>

          <div className="h-px bg-neutral-800 my-2" />

          {/* Links */}
          <button
            onClick={() => {
              params.onHomeClick();
              params.setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              params.pathUrl === "/" ? "text-amber-500" : "hover:text-amber-400"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              params.onGalleryClick();
              params.setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              params.pathUrl === "/gallery"
                ? "text-amber-500"
                : "hover:text-amber-400"
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => {
              params.onContactUsClick();
              params.setIsOpen(false);
            }}
            className={`text-left py-2 transition ${
              params.pathUrl === "/contact-us"
                ? "text-amber-500"
                : "hover:text-amber-400"
            }`}
          >
            Contact Us
          </button>

          {/* CTA */}
          <button
            onClick={() => {
              params.onBookNowClick();
              params.setIsOpen(false);
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
