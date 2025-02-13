import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmploymentMediation = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/construction.jpg"
            alt="Employment Administration"
            height={380}
            width={565}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Employment Mediation</h2>

          <p>
            Through our employment mediation services, we assist companies in
            tapping into a vast pool of skilled workers. We address the
            challenges faced in securing a qualified workforce. By enabling the
            employment of foreign talent and providing all-encompassing
            recruitment services, we play a pivotal role in meeting the
            workforce demands across various industries in Europe. Learn More
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default EmploymentMediation;
