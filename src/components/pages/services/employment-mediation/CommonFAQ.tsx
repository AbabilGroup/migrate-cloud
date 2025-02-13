import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const CommonFAQ = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold">
            Find Answers to the Most Commonly Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What are Our Responsibilities in the Mediation Process?
              </AccordionTrigger>
              <AccordionContent>
                The duties of agencies involved in the mediation of foreign
                worker employment include:
                <ul className="list-disc pl-5">
                  <li>
                    Sourcing a suitable worker based on the client’s criteria,
                    conducting the selection process, and providing the required
                    documentation.
                  </li>
                  <li>
                    Preparing and submitting all necessary paperwork to obtain
                    temporary residence and work permits for citizens of
                    third-world countries.
                  </li>
                  <li>Covering travel insurance costs for workers.</li>
                  <li>
                    Arranging for the visa required for residence and work in
                    Europe.
                  </li>
                  <li>Covering the cost of the worker&apos;s flight.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What Are Your Obligations Towards a Foreign Worker?
              </AccordionTrigger>
              <AccordionContent>
                Once a work permit is obtained for a foreign worker, it is
                necessary to provide accommodation and meals upon their arrival.
                The accommodation should meet basic living standards. If food
                cannot be provided, a food allowance must be paid to the worker.
                Additionally, you are obligated to register the worker for
                pension and health insurance, just as you would for any local
                employee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What Are the Requirements to Obtain a Residence and Work Permit?
              </AccordionTrigger>
              <AccordionContent>
                The requirements for obtaining the necessary permits include:
                <ul className="list-disc pl-5">
                  <li>
                    Operating an economic activity that is registered in Europe.
                  </li>
                  <li>
                    Employing at least one-quarter of Croatian citizens in
                    comparison to third-country nationals on a full-time,
                    indefinite contract for the past six months.
                  </li>
                  <li>
                    A certificate from the Tax Administration confirming no
                    outstanding debts related to public benefits, dated within a
                    recent period before applying for the permits.
                  </li>
                  <li>
                    No legal convictions related to labor relations or social
                    security.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/hr-when.jpg"
            alt="faq"
            height={400}
            width={570}
          />
        </div>
      </div>
    </section>
  );
};

export default CommonFAQ;
