import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1000px]">
        <h2 className="mb-5 text-4xl font-bold">Frequently Asked Questions</h2>

        <Accordion className="border" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-5">
              What does the process of hiring foreign workers look like?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              To hire foreign workers for positions across Europe, the following
              essential steps must be followed:
              <ul className="list-disc pl-5">
                <li>
                  Secure a work permit for the foreign employee through the
                  appropriate immigration or employment authority.
                </li>
                <li>
                  Submit an application for the worker&apos;s residence permit.
                </li>
                <li>
                  Register the foreign employee with relevant tax and social
                  security authorities.
                </li>
                <li>
                  Ensure adherence to all applicable labor and immigration
                  regulations.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5">
              What documents are required for the employment of foreign workers?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              The necessary documentation includes:
              <ul className="list-disc pl-5">
                <li>Work permit issued by the relevant authority.</li>
                <li>Employment contract or formal agreement.</li>
                <li>Valid passport or identification of the foreign worker.</li>
                <li>Proof of accommodation for the worker.</li>
                <li>Health insurance coverage for the worker.</li>
                <li>Proof of payment for required administrative fees.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5">
              How can administrative assistance services help employers navigate
              the process of hiring foreign workers in the EU?
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              <p>
                Administrative assistance services play a crucial role in
                simplifying the process of hiring foreign workers, offering
                thorough support at every stage.
              </p>
              <p>
                We guide employers through the entire work and residence permit
                application process, assist in preparing and submitting
                necessary documents to the relevant authorities, and ensure full
                compliance with legal requirements. Our services include
                continuous advice on labor and immigration matters, while
                streamlining administrative tasks. This approach saves employers
                time and resources, ensuring a seamless and efficient hiring
                process for foreign workers across Europe.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
