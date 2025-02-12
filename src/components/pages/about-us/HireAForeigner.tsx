import { Button } from "@/components/ui/button";

const HireAForeigner = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[620px] space-y-5">
        <h1 className="text-center text-5xl font-bold">Hire a foreigner</h1>
        <p className="text-center">
          A reliable and experienced partner in the recruitment of foreign
          workers. Our team of experts is dedicated to guiding you through the
          immigration process, ensuring a smooth and successful outcome.
        </p>
        <div className="flex items-center justify-center">
          <Button>Contact us</Button>
        </div>
      </div>
    </section>
  );
};

export default HireAForeigner;
