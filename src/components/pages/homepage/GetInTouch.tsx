import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 gap-20 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce className="rounded-3xl bg-[#F3F6F3] p-10">
          <div className="flex h-full flex-col items-start justify-center gap-5">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="font-semibold">
              For any questions you didn&apos;t find an answer to, feel free to
              reach out, and we&apos;ll explain everything in detail.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <div>
                  <FaEnvelope className="text-xl text-primary" />
                </div>
                <p className="font-semibold">info@migratecloud.world</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <FaMapMarkerAlt className="text-xl text-primary" />
                </div>
                <p className="font-semibold">Business Bay, Dubai, UAE</p>
              </div>
            </div>

            <p className="font-semibold">
              Opening hours: <br /> Mon - Fri <br /> 8:00 AM - 4:00 PM
            </p>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="space-y-5">
          <h2 className="text-2xl font-bold">
            Contact Us for Expert Assistance Have Questions? We’re Here to Help!
          </h2>

          <form className="space-y-3" action="">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <Input type="text" placeholder="First name" required />
              <Input type="text" placeholder="Last name" required />
            </div>

            <Input type="text" placeholder="Company name" required />
            <Input type="email" placeholder="Email address" required />

            <Input type="tel" placeholder="Mobile number" required />

            <Textarea placeholder="Enter a message" rows={5} required />

            <div>
              <Button className="bg-secondary">Send inquiry</Button>
            </div>
          </form>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default GetInTouch;
