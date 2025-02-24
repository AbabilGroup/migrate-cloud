import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";

const Achievements = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="mx-auto flex max-w-[800px] flex-col items-center justify-between gap-16 lg:flex-row">
          <FadeInLeftWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">7+</h2>
            <p className="text-center font-semibold">Years of experience</p>
          </FadeInLeftWithSlowBounce>
          <FadeInDownWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
              600+
            </h2>
            <p className="text-center font-semibold">Employees placed</p>
          </FadeInDownWithSlowBounce>
          <FadeInRightWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
              100%
            </h2>
            <p className="text-center font-semibold">Client satisfaction</p>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
