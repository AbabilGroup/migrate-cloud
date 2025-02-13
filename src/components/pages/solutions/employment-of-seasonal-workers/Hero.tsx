import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container flex max-w-[800px] flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          Employment of Seasonal Workers
        </h1>
        <p className="text-center">
          At MigrateCloud, we specialize in recruiting seasonal workers across
          various professions, including waiters, bartenders, cooks, assistant
          kitchen staff, maids, cleaners, and receptionists. Our expertise
          ensures that you can find the right talent for your needs.
        </p>
        <Link href="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
