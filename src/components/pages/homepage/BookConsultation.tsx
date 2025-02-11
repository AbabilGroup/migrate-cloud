import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BookConsultation = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Book your Free Consultation.</h2>
          <p className=" ">
            Reliable and experienced partner in hiring foreign workers. Our
            experts are ready to work with you to remove the stress from any
            immigration process, increasing your chances of a successful
            outcome.
          </p>
          <p className=" ">
            Contact our team today to learn more about our services and take the
            first step towards successfully hiring.
          </p>
          <div>
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="h-auto w-full"
            src="/images/consultant.jpg"
            alt="Consultation"
            height={380}
            width={560}
          />
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
