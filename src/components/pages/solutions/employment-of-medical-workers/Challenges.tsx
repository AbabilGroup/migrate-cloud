import Image from "next/image";

const Challenges = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-20 lg:flex-row">
        <div>
          <Image
            className="h-auto max-w-[390px] rounded-2xl"
            src="/images/medical-challenge.jpg"
            alt="Challenges"
            height={575}
            width={390}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            Challenges in Finding Medical Workers
          </h2>

          <p className="border-l-2 border-l-black pl-5 font-bold">
            The challenge of sourcing qualified medical professionals,
            particularly in specialized healthcare roles, is a significant issue
            faced by healthcare institutions globally.
          </p>

          <p>
            Similar to other countries, Croatia’s healthcare system is grappling
            with the difficulties of finding and retaining skilled medical
            staff. The demand for healthcare professionals, such as doctors,
            nurses, pharmacists, and technicians, continues to rise due to
            factors like an aging population, medical advancements, and changing
            healthcare needs.
          </p>

          <p>
            The need for medical workers is continuously increasing, driven by
            factors like population growth, an aging society, and advancements
            in medical technology.
          </p>
          <p>
            Croatia’s healthcare system includes both public and private
            entities, each with its own staffing requirements. While the
            country’s medical workforce is generally skilled, certain
            specialties or regions may experience shortages, creating gaps in
            patient care and increasing the strain on existing staff.
          </p>
          <p>
            Healthcare facilities also often face challenges in accurately
            predicting their staffing needs, leading to shortages during
            critical times. This unpredictability can disrupt care quality and
            overburden current staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
