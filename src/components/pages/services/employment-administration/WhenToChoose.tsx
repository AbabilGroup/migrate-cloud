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
            When to choose an administration service?
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                You have already found employees yourself.
              </AccordionTrigger>
              <AccordionContent>
                If you have already carried out the process of selecting foreign
                workers yourself and selected the ideal staff for your business,
                we can provide you with support and assistance during
                employment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                You don&apos;t have enough time to worry about administration.
              </AccordionTrigger>
              <AccordionContent>
                We free you from administrative tasks and processes, allowing
                you to focus on your core business activities. We take care of
                all the necessary documentation so that you can dedicate
                yourself to developing your business. We will secure visas, and
                residence and work permits for you, translate foreign
                documentation, prepare employment contracts, and all other
                necessary documents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                You don&apos;t understand the legal regulations.
              </AccordionTrigger>
              <AccordionContent>
                Our team checks qualifications and ensures compliance with local
                regulations and laws. Experienced experts provide support in the
                entire process and ensure that the entire process follows legal
                regulations.
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

export default WhenToChoose;
