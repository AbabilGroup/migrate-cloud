import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <FadeInLeftWithSlowBounce className="space-y-5">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="">
              MigrateCloud is your trusted partner for hiring international
              talent. Our experts are ready to simplify the immigration process
              and ensure successful outcomes.
            </p>

            {/* lists */}
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2">
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">Free consultations</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">High-quality candidates</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">Quick response times</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">Long-term partnerships</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">24/7 availability</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">Verified professionals</p>
              </div>
            </div>

            <div>
              <Link href="/contact">
                <Button className="bg-secondary">Contact us</Button>
              </Link>
            </div>
          </FadeInLeftWithSlowBounce>
          <FadeInRightWithSlowBounce>
            <Image
              className="h-auto w-full rounded-2xl"
              width={450}
              height={700}
              src="/images/why.jpg"
              alt="Why Choose Us"
            />
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
