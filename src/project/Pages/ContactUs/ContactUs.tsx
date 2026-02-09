import { avatar } from "./../../../assets/contactUs/index";
import ContactForm from "./Components/ContactForm";

const ContactUs = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-neutral-400 text-lg">
            Let’s talk about your next shoot
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photographer Card */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative mb-6">
              <img
                src={avatar}
                alt="Photographer Avatar"
                className="
                  w-40 h-40 rounded-full object-cover
                  border-4 border-neutral-800
                "
              />
              <div
                className="
                absolute -bottom-2 -right-2
                bg-neutral-900
                p-3 rounded-full
                border border-neutral-700
              "
              >
                <i className="fa-regular fa-camera text-amber-500"></i>
              </div>
            </div>

            <h3 className="text-4xl font-semibold mb-2 text-white">
              Mustafa Bashar
            </h3>
            <p className="text-neutral-400 mb-6 max-w-md">
              Professional photographer specialized in fashion, events,
              branding, and real estate photography.
            </p>

            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-amber-500"></i>
                <span>contact@studio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-amber-500"></i>
                <span>+20 000 000 000</span>
              </div>
            </div>
          </div>
          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
