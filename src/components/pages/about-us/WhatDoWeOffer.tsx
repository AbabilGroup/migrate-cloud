import { Button } from "@/components/ui/button";

const WhatDoWeOffer = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* column */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h6 className="font-bold">WHAT DO WE OFFER?</h6>
          <h2 className="text-center text-4xl font-bold lg:text-left">
            Need assistance with immigration? Our expert team is here to help.
          </h2>
          <p className="text-center lg:text-left">
            Contact our team today to learn more about our services and take the
            first step towards successfully employing foreign workers.
          </p>
          <div>
            <Button>Explore all services</Button>
          </div>
        </div>
        {/* column */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
              Support in administration
            </h3>
            <p className="text-center">
              We handle all the necessary administration for employment, such as
              translation of documents, obtaining visas and work permits,
              employment contracts.
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
              Employment Mediation
            </h3>
            <p className="text-center">
              Save time and resources by utilizing our professional services in
              locating qualified workers from outside Europe.
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">Full-Service HR</h3>
            <p className="text-center">
              Comprehensive support in human resources management, starting from
              recruitment through to full employee integration.
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
              Worker Assignment Services
            </h3>
            <p className="text-center">
              We offer worker placement for specific periods (such as projects
              or seasonal work) with the option to transition to permanent
              employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
