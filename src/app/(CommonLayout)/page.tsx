import Achievements from "@/components/pages/homepage/Achievements";
import BrandLogos from "@/components/pages/homepage/BrandLogos";
import Hero from "@/components/pages/homepage/Hero";
import TypeOfEmployees from "@/components/pages/homepage/TypeOfEmployees";
import WhyChoose from "@/components/pages/homepage/WhyChoose";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Achievements />
      <WhyChoose />
      <BrandLogos />
      <TypeOfEmployees />
    </main>
  );
};

export default HomePage;
