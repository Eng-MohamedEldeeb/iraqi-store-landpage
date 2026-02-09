const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div
          className="
          grid gap-12
          md:grid-cols-3
          text-center md:text-left
        "
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gray-400">Captura</span>{" "}
              <span className="text-white">Production</span>
            </h3>
            <p className="text-neutral-400 text-sm max-w-sm mx-auto md:mx-0">
              Professional photography and visual production services for
              brands, events, fashion, and real estate.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-neutral-300">
              <i className="fa-solid fa-envelope text-amber-500"></i>
              <a
                href="mailto:info@capturaproduction.com"
                className="hover:text-white transition"
              >
                info@capturaproduction.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-neutral-300">
              <i className="fa-solid fa-phone text-amber-500"></i>
              <a
                href="tel:+201234567890"
                className="hover:text-white transition"
              >
                +20 123 456 7890
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-neutral-300">
              <i className="fa-solid fa-location-dot text-amber-500"></i>
              <span>Cairo, Egypt</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="
                  w-10 h-10 rounded-full
                  border border-neutral-700
                  flex items-center justify-center
                  hover:bg-amber-500 hover:text-black
                  transition
                "
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="
                  w-10 h-10 rounded-full
                  border border-neutral-700
                  flex items-center justify-center
                  hover:bg-amber-500 hover:text-black
                  transition
                "
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-neutral-800" />

        {/* Bottom */}
        <div
          className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-4 text-sm text-neutral-400
        "
        >
          <span>
            © {new Date().getFullYear()} Captura Production. All rights
            reserved.
          </span>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
