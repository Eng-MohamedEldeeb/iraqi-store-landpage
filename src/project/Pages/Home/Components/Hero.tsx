import { photoStudio } from "./../../../../assets/home/index";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${photoStudio})` }}
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Your Partner in Professional Photography
        </h2>

        <p className="text-gray-300 mb-6">
          High-quality visual content that elevates your brand presence.
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg">
          Book a Session Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
