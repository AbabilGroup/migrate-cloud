import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";


const WhenToConsider = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold">
            When to Consider Employment Mediation?
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you need workers for a specific project or on a seasonal
                basis?
              </AccordionTrigger>
              <AccordionContent>
                Our service provides you with access to a global talent pool. We
                assess your requirements and connect you with the best
                candidates to meet those needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                You want to avoid the complexities of direct employment
              </AccordionTrigger>
              <AccordionContent>
                We handle all administrative and accounting tasks related to
                workers, allowing you to focus on your core business operations
                without the added burden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                You want to ensure the quality of your workforce
              </AccordionTrigger>
              <AccordionContent>
                If you need to evaluate the skills of workers before making a
                permanent hire, our service offers an ideal solution as a test
                phase. Additionally, our agency workers are thoroughly vetted.
                Many of them have extensive experience from previous agency
                work, contributing developed skills and knowledge to any
                business environment. We also conduct additional checks on all
                new workers to ensure their readiness.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/when.jpg"
            alt="faq"
            height={400}
            width={570}
          />
        </div>
      </div>
    </section>
  );
};

export default WhenToConsider;
