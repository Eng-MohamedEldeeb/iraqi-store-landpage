import { useState } from "react";
import "./style.css";

const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setIsClosing((prev) => !prev)}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm
          ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
      />

      {/* Modal */}
      <div
        className={`relative bg-neutral-900 border border-neutral-700 
        rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-[90%]
        ${isClosing ? "animate-scale-fade-out" : "animate-scale-fade"}`}
      >
        <div className="text-center">
          <div className="mb-4 text-amber-500 text-4xl">✓</div>

          <h2 className="text-2xl font-bold mb-3">Booking Request Sent</h2>

          <p className="text-gray-400 text-sm mb-6">
            Thank you for reaching out. We have received your booking request
            and our team will contact you shortly.
          </p>

          <button
            onClick={onClose}
            className="bg-amber-600 hover:bg-amber-700 transition 
            px-8 py-3 rounded-lg text-sm font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
