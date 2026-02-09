const Features = () => {
  const features = [
    {
      icon: "fa-regular fa-camera fa-2xl",
      title: "Professional Equipment",
    },
    { icon: "fa-regular fa-calendar-check fa-2xl", title: "Easy Booking" },
    { icon: "fa-solid fa-truck-fast fa-2xl", title: "Fast Delivery" },
    { icon: "fa-solid fa-user fa-2xl", title: "Experienced Team" },
  ];

  return (
    <section className="py-20 bg-neutral-800">
      <h2 className="text-center text-3xl font-bold mb-12 text-white">
        Integrated Creative Solutions
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-white">
        {features.map((f, i) => (
          <div key={i} className="text-center">
            <i className={f.icon} />
            <p className="font-medium mt-2.5">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
