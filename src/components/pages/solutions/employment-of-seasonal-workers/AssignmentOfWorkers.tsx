import { Button } from "@/components/ui/button";
import Image from "next/image";

const AssignmentOfWorkers = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/assignment-workers.jpg"
            alt="Employment Administration"
            height={380}
            width={565}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Assignment of workers</h2>

          <p>
            Our worker assignment service facilitates the swift hiring of labor
            for seasonal projects or specific timeframes. By utilizing available
            workers already in Europe, we expedite the hiring process
            significantly. We handle the establishment of assignment agreements
            and take responsibility for salary payments and administrative
            tasks. This service is designed to provide a practical solution for
            urgent manpower needs while ensuring flexibility and efficiency in
            managing personnel across various projects and seasonal demands.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default AssignmentOfWorkers;
