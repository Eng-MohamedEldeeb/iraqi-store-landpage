import { Features, Hero, Portfolio, Services } from "./Components";

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
