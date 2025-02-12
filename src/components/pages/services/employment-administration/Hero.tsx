import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[800px] flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          Comprehensive Employment Administration Services
        </h1>
        <p className="text-center">
          We take care of all administrative tasks related to hiring
          international professionals, including document translations, visa and
          work permit processing, and drafting employment contracts.
        </p>
        <Link href="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
