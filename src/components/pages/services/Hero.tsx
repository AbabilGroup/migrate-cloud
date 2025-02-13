import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container flex max-w-[800px] flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          Know more about our services
        </h1>
        <p className="text-center">
          We support you through every stage of the recruitment process – from
          sourcing candidates, handling administration, to seamless integration.
        </p>
        <Link href="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
