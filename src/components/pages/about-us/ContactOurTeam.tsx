import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactOurTeam = () => {
  return (
    <section className="bg-gradient-310deg py-20">
      <div className="container flex max-w-[1200px] flex-col items-center justify-between gap-44 rounded-xl p-10 shadow-2xl lg:flex-row">
        <div className="flex flex-col items-center justify-center space-y-3 lg:items-start">
          <h2 className="text-center text-4xl font-bold text-white lg:text-left">
            Contact our team
          </h2>
          <p className="text-center text-white lg:text-left">
            Learn more about our professional services and <br /> find out how
            we can help you.
          </p>
          <div>
            <Button>Contact us</Button>
          </div>
        </div>
        <div>
          <Image
            className="size-[260px]"
            src="/images/handshake.png"
            height={260}
            width={260}
            alt="Handshake"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactOurTeam;
