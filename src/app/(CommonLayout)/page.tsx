import Achievements from "@/components/pages/homepage/Achievements";
import BookConsultation from "@/components/pages/homepage/BookConsultation";
import BrandLogos from "@/components/pages/homepage/BrandLogos";
import Hero from "@/components/pages/homepage/Hero";
import HowToHire from "@/components/pages/homepage/HowToHire";
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
      <HowToHire />
      <BookConsultation />
    </main>
  );
};

export default HomePage;
