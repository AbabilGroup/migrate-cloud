import Image from "next/image";

const Challenges = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-20 lg:flex-row">
        <div>
          <Image
            className="h-auto max-w-[390px] rounded-2xl"
            src="/images/construction-challenge.jpg"
            alt="Challenges"
            height={575}
            width={390}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            Challenges in Finding Construction Workers
          </h2>

          <p className="border-l-2 border-l-black pl-5 font-bold">
            The construction industry is currently encountering significant
            challenges in sourcing skilled labor. This shortage of workers
            hampers productivity, causes delays in project timelines, and
            complicates efforts to meet the increasing demand for qualified
            professionals in the sector.
          </p>

          <p>
            Across Europe, there is a rising demand for construction experts, as
            seen in the numerous job listings. Many companies face difficulties
            in locating experienced and capable workers, resulting in delays in
            project completion.
          </p>
          
          <p>
            As a recruitment agency specializing in foreign labor, MigrateCloud
            bridges the gap between demand and supply by connecting skilled
            workers from third-world countries with employers in need. We also
            guide our clients through the legal processes associated with hiring
            foreign employees, ensuring a smooth and compliant recruitment
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
