import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactOurTeam = () => {
  return (
    <section className="bg-gradient-310deg py-20">
      <div className="container flex max-w-[1200px] items-center justify-between rounded-xl p-10 shadow-2xl">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-white">Contact our team</h2>
          <p className="text-white">
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
