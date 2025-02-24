import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HireAForeigner = () => {
  return (
    <section className="py-20">
      <FadeInUpWithSlowBounce className="container max-w-[620px] space-y-5">
        <h1 className="text-center text-5xl font-bold">Hire a foreigner</h1>
        <p className="text-center">
          A reliable and experienced partner in the recruitment of foreign
          workers. Our team of experts is dedicated to guiding you through the
          immigration process, ensuring a smooth and successful outcome.
        </p>
        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default HireAForeigner;
