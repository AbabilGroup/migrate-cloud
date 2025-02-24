import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhyChoose = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce className="space-y-5">
          <h2 className="text-center text-4xl font-bold leading-[60px] xl:text-left">
            Why Choose a Recruitment Agency?
          </h2>
          <p className="text-center xl:text-left">
            At MigrateCloud, we provide innovative, fast, and efficient
            solutions for sourcing, selecting, and hiring international talent.
            Our expertise ensures a seamless hiring process tailored to your
            business needs.
          </p>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce>
          <Accordion className="border" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5">
                Don’t Know Where to Find Quality Workers?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                Our team of experts analyzes your requirements and crafts a
                personalized hiring strategy. Leveraging our global network, we
                connect you with skilled candidates from countries like India,
                Bangladesh, Nepal, Pakistan, Sri Lanka, and the Philippines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-5">
                Need Flexibility in Hiring?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                We offer temporary employment solutions for international
                workers. We handle the formalities, including employment
                contracts, while you focus on integrating them into your team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-5">
                No Internal HR Team?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                Our Full-Service HR option covers everything from recruitment to
                employee integration. With expertise in labor laws and
                compliance, we ensure a smooth and hassle-free process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-5">
                Unfamiliar with Legal Regulations?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                Navigating immigration and labor laws can be complex. We
                simplify the process, ensuring compliance with all regulations
                and handling the necessary documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChoose;
