import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";

const HowToHire = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">
          How to hire international talent?
        </h2>
        <p className="mb-12 mt-5 text-center">
          We guide you step-by-step through the process of hiring international
          talent:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">01</h2>
            <h3 className="text-2xl font-bold">Workforce Sourcing</h3>
            <p>
              We find candidates tailored to your needs. Online interviews are
              available.
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">02</h2>
            <h3 className="text-2xl font-bold">Contracts</h3>
            <p>We draft and manage employment contracts.</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">03</h2>
            <h3 className="text-2xl font-bold">Accommodation</h3>
            <p>We assist in finding suitable housing for workers.</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">04</h2>
            <h3 className="text-2xl font-bold">Work Permits</h3>
            <p>We handle the submission of work permit applications.</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">05</h2>
            <h3 className="text-2xl font-bold">Visas</h3>
            <p>We manage visa applications, which typically take 4-6 weeks.</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">06</h2>
            <h3 className="text-2xl font-bold">Travel Arrangements</h3>
            <p>We book flights and ensure workers arrive safely.</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">07</h2>
            <h3 className="text-2xl font-bold">Documentation</h3>
            <p>
              We assist with ID cards, medical exams, and bank account setup.
            </p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">08</h2>
            <h3 className="text-2xl font-bold">Satisfaction</h3>
            <p>
              Our goal is to ensure both employers and employees are satisfied.
            </p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
        </div>
      </div>
    </section>
  );
};

export default HowToHire;
