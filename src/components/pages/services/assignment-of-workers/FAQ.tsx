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
              What are the advantages of hiring through an agency?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              By using the service of agency work, we enable you to flexibly
              fill short or long absences of your employees, to optimize
              seasonal business needs or requirements for specific projects. We
              also handle administrative tasks, facilitating the entire process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5">
              What administrative tasks do we take over from you?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              We relieve you from the administrative burden associated with
              seconded workers, which includes:
              <ul className="list-disc pl-5">
                <li>Drafting and concluding employment contracts</li>
                <li>Calculating and processing wages and contributions</li>
                <li>
                  Registering and deregistering workers with the Pension and
                  Health Insurance Institute
                </li>
                <li>
                  Maintaining monthly and annual records (vacation days, sick
                  leave, etc.)
                </li>
                <li>
                  Completing and submitting required reports to relevant
                  authorities
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5">
              What are your obligations towards workers?
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              The user (employer) must adhere to labor laws, including health
              and safety regulations, as well as special protections for
              specific groups of workers. This includes providing protective
              clothing and footwear when required by the nature of the job.
              Additionally, the user is responsible for organizing and assigning
              work according to the established processes, as well as
              maintaining attendance records for workers at the workplace.
              Footer
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
