import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const WhenToChoose = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold">
            When to Choose the Full-Service HR Option?
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Lack of an Internal HR Team</AccordionTrigger>
              <AccordionContent>
                Without an in-house HR department, managing all aspects of the
                HR process, from recruitment to employee onboarding, can become
                overwhelming and time-consuming. By outsourcing to experts,
                companies can ensure that each phase of the HR process is
                expertly managed, allowing them to focus on their core
                operations without the burden of HR-related tasks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Limited Resources for Process Management
              </AccordionTrigger>
              <AccordionContent>
                Whether it’s financial, time, or professional limitations,
                outsourcing Full-Service HR offers an effective solution. We
                provide the infrastructure, expertise, and experience needed to
                efficiently handle all HR aspects, from recruitment to
                administrative duties, ensuring a smooth and streamlined process
                without putting additional pressure on internal resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Need for a Quick and Reliable Solution
              </AccordionTrigger>
              <AccordionContent>
                When a company needs a fast and dependable HR solution, the
                Full-Service HR option is the best choice. We efficiently
                navigate the complexities of HR, delivering timely and effective
                results. By leveraging our specialized knowledge and experience,
                companies can ensure their HR needs are met quickly and with
                minimal hassle.
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

export default WhenToChoose;
