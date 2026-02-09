import "./style.css";
import { useState } from "react";

const ImageModal = ({
  image,
  onClose,
}: {
  image: string | null;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setIsClosing((prev) => !prev)}
        className={`absolute inset-0 bg-black/80 
          ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
      />

      {/* Image */}
      <div
        className={`relative max-w-5xl w-[90%]
          ${isClosing ? "animate-scale-fade-out" : "animate-scale-fade"}`}
      >
        <img
          src={image}
          alt=""
          className="w-full max-h-[85vh] object-contain rounded-2xl"
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-neutral-900 border border-neutral-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-neutral-800 transition"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
