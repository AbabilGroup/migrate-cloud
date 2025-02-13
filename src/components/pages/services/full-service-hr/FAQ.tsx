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
              What HR Functions Do We Cover?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              Our Full-Service HR solution encompasses every aspect of the HR
              process, including recruitment, selection procedures,
              administrative tasks, insurance matters, placements, and
              continuous support and guidance throughout the employment
              lifecycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5">
              How Do We Ensure Compliance With Relevant Labor Laws and
              Regulations?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              We employ expert staff with extensive experience in employment
              law, ensuring careful attention to detail and the identification
              of the most suitable solutions for your company’s unique needs. We
              also stay up to date with the latest legal requirements and best
              practices to ensure full compliance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5">
              What Flexibility Do We Offer in Adapting the Solution to Your
              Specific Company Needs?
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              We understand that every company has distinct HR requirements.
              Therefore, we offer flexibility in customizing our Full-Service HR
              solution to meet your unique needs, whether that involves
              adjusting service components, fulfilling specific requirements, or
              adapting to your evolving business demands.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
