import Hero from "@/components/pages/services/Hero";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MigrateCloud | Services",
};

const Services = () => {
  return (
    <main className="pb-20">
      <Hero />

      <div className="container mt-20 max-w-[1000px] space-y-20">
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">Employment administration</h5>

          <p>
            We take care of all administrative tasks related to hiring
            international professionals, including document translations, visa
            and work permit processing, and drafting employment contracts.
          </p>

          <div>
            <Link href="/services/employment-administration">
              <Button>Know more</Button>
            </Link>
          </div>
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">Full-Service HR</h5>

          <p>
            For comprehensive human resources management support, from
            recruitment to seamless employee integration.
          </p>

          <div>
            <Link href="/services/full-service-hr">
              <Button>Know more</Button>
            </Link>
          </div>
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">Employment Mediation</h5>

          <p>
            Save valuable time and resources by leveraging our professional
            expertise in sourcing qualified workers from outside Europe.
          </p>

          <div>
            <Link href="/services/employment-mediation">
              <Button>Know more</Button>
            </Link>
          </div>
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">Worker Assignment Services</h5>

          <p>
            MigrateCloud provides a service for hiring workers for specific
            periods, such as projects or seasons, with the option for permanent
            employment.
          </p>

          <div>
            <Link href="/services/assignment-of-workers">
              <Button>Know more</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
