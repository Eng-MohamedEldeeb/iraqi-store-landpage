import { products } from "../../../assets/home";
import { background } from "../../../assets/store";

const store = [
  {
    id: 1,
    title: "Event Photography",
    description: "Full coverage for corporate and private events.",
    price: "$500",
    image: products,
  },
  {
    id: 2,
    title: "Brand Shoot",
    description: "Professional visuals to elevate your brand identity.",
    price: "$700",
    image: products,
  },
  {
    id: 3,
    title: "Fashion Session",
    description: "Creative fashion photography with studio or outdoor setup.",
    price: "$600",
    image: products,
  },
  {
    id: 4,
    title: "Real Estate Photography",
    description: "High-quality photos to showcase properties perfectly.",
    price: "$400",
    image: products,
  },
  {
    id: 4,
    title: "Real Estate Photography",
    description: "High-quality photos to showcase properties perfectly.",
    price: "$400",
    image: products,
  },
  {
    id: 4,
    title: "Real Estate Photography",
    description: "High-quality photos to showcase properties perfectly.",
    price: "$400",
    image: products,
  },
];

const Store = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="py-24 bg-neutral-900 min-h-screen
    w-full
    bg-center
    bg-cover
    bg-no-repeat
    flex items-center
    justify-center
    relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Store
            </h2>
            <p className="text-neutral-400 text-lg">
              Professional photography services tailored to your needs
            </p>
          </div>
          {/* Products Grid */}
          {/* Grid */}
          <div
            className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
          >
            {store.map((product) => (
              <div
                key={product.id}
                className="
                group bg-neutral-900
                border border-neutral-800
                rounded-2xl overflow-hidden
                transition hover:border-amber-500
              "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                    h-56 w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  />

                  <div
                    className="
                    absolute inset-0
                    bg-black/40 opacity-0
                    group-hover:opacity-100
                    transition
                  "
                  />
                  {/* Hover Overlay */}
                  <div
                    className="
                    absolute inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition
                    flex items-end
                  "
                  >
                    <div className="p-6 w-full">
                      <button
                        className="
                      text-white
                        w-full py-3
                        bg-amber-500
                        rounded-lg font-medium
                        hover:bg-amber-400 transition
                      "
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 text-white">
                  <h3 className="text-xl font-semibold">{product.title}</h3>

                  <p className="text-sm text-neutral-400">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-amber-500 font-medium">
                      {product.price}
                    </span>

                    <button
                      className="
                      text-sm text-white
                      border border-neutral-700
                      px-4 py-2 rounded-lg
                      hover:bg-amber-500
                      transition
                    "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
