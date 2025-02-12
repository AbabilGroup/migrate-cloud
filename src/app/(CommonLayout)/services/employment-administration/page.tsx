import Advantages from "@/components/pages/services/employment-administration/Advantages";
import FAQ from "@/components/pages/services/employment-administration/FAQ";
import Features from "@/components/pages/services/employment-administration/Features";
import Hero from "@/components/pages/services/employment-administration/Hero";
import Include from "@/components/pages/services/employment-administration/Include";
import WhenToChoose from "@/components/pages/services/employment-administration/WhenToChoose";

const EmploymentAdministrationPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Include />
      <WhenToChoose />
      <Advantages />
      <FAQ />
    </main>
  );
};

export default EmploymentAdministrationPage;
