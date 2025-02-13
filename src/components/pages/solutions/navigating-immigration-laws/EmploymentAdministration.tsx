import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmploymentAdministration = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/employment-admin.jpg"
            alt="Employment Administration"
            height={380}
            width={565}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Employment Administration</h2>

          <p>
            Our Employment Administration Service manages all administrative
            procedures related to hiring international professionals. We ensure
            compliance with labor and immigration laws, streamlining the entire
            process for your company.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default EmploymentAdministration;
