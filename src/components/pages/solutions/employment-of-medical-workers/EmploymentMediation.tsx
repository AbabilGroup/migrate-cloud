import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmploymentMediation = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/medical.jpg"
            alt="Employment Administration"
            height={380}
            width={565}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Employment Mediation</h2>

          <p>
            We provide access to a broad pool of pre-screened candidates,
            including those with specialized skills and experience. By utilizing
            our networks and resources, we can accelerate the hiring process,
            reducing the time needed to fill vacancies and minimizing
            disruptions in patient care. We ensure adherence to all licensing
            and regulatory standards and help reduce the risk of hiring
            unqualified or unreliable candidates.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default EmploymentMediation;
