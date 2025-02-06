import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhyChoose = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-center text-5xl font-bold leading-[60px] xl:text-left">
            Why choose a recruitment agency?
          </h2>
          <p className="text-center xl:text-left">
            We provide innovative, fast, and efficient solutions when searching
            for, selecting, and hiring foreign workers.
          </p>
        </div>
        <div>
          <Accordion className="border" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5">
                Don&apos;t know where to find quality foreign workers?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                Our team of experts conducts a detailed analysis of your needs
                and worker requirements, providing you with a personalized
                hiring strategy. Utilizing our extensive network and resources,
                we will identify qualified candidates from different parts of
                the world that match your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-5">
                Need flexibility in hiring?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                We offer the option of temporary employment for foreign workers.
                We simplify the hiring process by concluding a formal Employment
                Contract with the worker, then assigning them to the client
                company for temporary work, according to agreed terms of
                employment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-5">
                Don&apos;t have an internal HR team to manage workers and the
                hiring process?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                The Full Service HR option offers a comprehensive range of
                support, covering every aspect of the HR process from hiring to
                employee integration within the company. Our specialized staff
                with significant experience in labor law ensures careful
                attention to detail and recognition of optimal solutions
                tailored to the unique needs of the company.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-5">
                Not familiar with legal regulations and required documentation?{" "}
              </AccordionTrigger>
              <AccordionContent className="px-5">
                We assist companies in navigating the complexities of hiring
                foreign workers, ensuring compliance with immigration and labor
                regulations, and streamlining the administrative process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
