import { fashion, products, realEstate } from "./../../../../assets/home/index";

const Services = () => {
  const services: { title: string; desc: string; img: string }[] = [
    {
      title: "Fashion Photography",
      desc: "Professional fashion shoots",
      img: fashion,
    },
    {
      title: "Product Photography",
      desc: "High-end product visuals",
      img: products,
    },
    {
      title: "Real Estate Photography",
      desc: "Luxury property shots",
      img: realEstate,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg text-center"
          >
            <img
              src={s.img}
              alt=""
              className="h-72 w-full object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl text-white font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
