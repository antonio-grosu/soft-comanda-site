import Link from "next/link";
import Image from "next/image";
import Hero from "./components/home_page/hero_section";
import Clients from "./components/home_page/clients_section";
import Technology from "./components/home_page/technology_section";
const HomePage = () => {
  return (
    <main className="py-24 md:py-0 bg-white px-8 md:px-32 2xl:px-64">
      <Hero />
      <Clients />
      <Technology />
    </main>
  );
};

export default HomePage;
