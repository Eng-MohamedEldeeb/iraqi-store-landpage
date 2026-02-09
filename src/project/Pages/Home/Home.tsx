import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services";

const Home = () => {
  return (
    <main className="bg-neutral-900">
      <Hero />
      <Services />
      <Features />
      <Portfolio />
    </main>
  );
};

export default Home;
