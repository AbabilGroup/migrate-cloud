import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/faq.jpg"
            alt="faq"
            height={600}
            width={450}
          />
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="space-y-7">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Who is responsible for providing accommodation?
              </AccordionTrigger>
              <AccordionContent>
                Employers are required to offer suitable and comfortable
                accommodation for their workers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does it take for workers to arrive?
              </AccordionTrigger>
              <AccordionContent>
                The process typically takes a minimum of three months. This
                timeframe includes a two-week period for obtaining a work
                permit, followed by at least six weeks for visa processing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens if we are not satisfied with an employee?
              </AccordionTrigger>
              <AccordionContent>
                If an employee does not meet your expectations, you have the
                right to terminate their contract as per standard employment
                regulations. In such cases, we assist the worker in securing
                alternative employment. If no suitable opportunities arise, we
                facilitate their return to their home country.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can we apply for work permits longer than 1 year?
              </AccordionTrigger>
              <AccordionContent>
                Work permits are generally issued for one year, while seasonal
                workers can obtain permits for up to six months. Due to
                bureaucratic procedures, securing a work permit and visa
                typically takes between two to three months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can work permits be renewed?
              </AccordionTrigger>
              <AccordionContent>
                Renewal applications must be submitted at least one month before
                the permit expires. The process requires the employee’s
                passport, previous ID card, recent photographs (for the new ID),
                a statement from the accommodation provider, and a
                company-issued declaration confirming continued accommodation at
                the designated location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Are there restrictions on hiring foreign workers?
              </AccordionTrigger>
              <AccordionContent>
                Certain professions in Europe are classified as high-demand,
                allowing employers to apply for work permits without undergoing
                a labor market test. The official list of these professions is
                available through the relevant authorities. For positions not
                included in the shortage occupation list, a Labor Market Test is
                required. This process lasts for two weeks and assesses the
                availability of local workers. If a labor shortage is confirmed,
                applications for foreign workers can proceed accordingly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default FAQ;
