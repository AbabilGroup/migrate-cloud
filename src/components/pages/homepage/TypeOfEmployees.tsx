import { FaBox } from "react-icons/fa6";
import { TiFlowMerge } from "react-icons/ti";
import { FaScrewdriver } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaChessBoard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";

const TypeOfEmployees = () => {
  return (
    <section className="bg-[#F3F6F3] py-20">
      <div className="container space-y-10">
        <h2 className="text-center text-4xl font-bold">
          What Type of Employees Can We Find?
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaBox className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">Warehouse Workers</h3>
            <p>
              Proactive and eager to learn, our candidates are ready to take on
              leadership roles.
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInDownWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <TiFlowMerge className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">Electricians</h3>
            <p>
              Skilled professionals are available at various expertise levels.
              We can arrange video interviews for assessment.
            </p>
          </FadeInDownWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaScrewdriver className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">Mechanics</h3>
            <p>Young, capable, and ready for new challenges.</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaHammer className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">Construction Workers</h3>
            <p>
              From basic skills to specialized trades, we find the right fit for
              your projects.
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaChessBoard className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">Tilers</h3>
            <p>
              igh-demand professionals are available through our streamlined
              hiring process.
            </p>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaMailBulk className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">Customized Positions</h3>
            <p>Need a specific role? We can help. Contact us for inquiries.</p>
          </FadeInRightWithSlowBounce>
        </div>

        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TypeOfEmployees;
