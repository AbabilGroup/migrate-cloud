import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container flex max-w-[800px] flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          Employment of Construction Workers
        </h1>
        <p className="text-center">
          We provide staffing solutions for a wide variety of
          construction-related roles, including armorers, carpenters, masons,
          metal structure fitters, roofers, and construction machine operators.
        </p>
        <Link href="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
