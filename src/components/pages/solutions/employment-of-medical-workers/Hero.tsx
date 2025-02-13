import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container flex max-w-[800px] flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          Employment of Medical Workers
        </h1>
        <p className="text-center">
          Doctors, nurses, medical technicians, pharmacists, and other
          healthcare professionals – we specialize in recruiting all types of
          medical staff.
        </p>
        <Link href="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
