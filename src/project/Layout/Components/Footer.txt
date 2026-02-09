const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-0 md:flex-row md:items-start md:justify-between md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-envelope"></i>
              <a
                href="mailto:info@capturaproduction.com"
                className="hover:text-gray-300 transition"
              >
                info@capturaproduction.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-phone"></i>
              <a
                href="tel:+201234567890"
                className="hover:text-gray-300 transition"
              >
                +20 123 456 7890
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-location-dot"></i>
              <span>Cairo, Egypt</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm">
          <a href="/privacy" className="text-white mx-4 transition">
            Privacy
          </a>
          -
          <a href="/terms" className="text-white mx-4 transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
