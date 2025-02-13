import Image from "next/image";

const Challenges = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-20 lg:flex-row">
        <div>
          <Image
            className="h-auto max-w-[390px] rounded-2xl"
            src="/images/hr-when.jpg"
            alt="Challenges"
            height={575}
            width={390}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            Challenges of Immigration Compliance
          </h2>

          <p className="border-l-2 border-l-black pl-5 font-bold">
            One of the biggest challenges companies encounter when hiring
            foreign professionals is navigating the intricate immigration laws,
            which are designed to safeguard the local labor market while also
            addressing economic workforce demands.
          </p>

          <p>
            Ensuring compliance with immigration regulations can be complex, as
            businesses must adhere to strict legal requirements governing the
            employment of international workers. Employers are obligated to meet
            tax and social security regulations, as well as specific conditions,
            such as maintaining full-time employment for local or EU nationals
            for a designated period. The process also involves obtaining work
            and residence permits, along with adhering to policies for hiring
            talent from non-EU countries.
          </p>
          <p>
            This is where expert guidance becomes essential. Our team
            specializes in streamlining the employment process, assisting
            businesses in securing work permits, handling the necessary
            documentation, and ensuring full compliance with all labor market
            regulations.
          </p>
          <p>
            At MigrateCloud, we provide professional guidance to simplify the
            hiring process. Our experts assist in obtaining work permits,
            managing required documentation, and ensuring full compliance with
            labor market regulations.
          </p>
          <p>
            If you’re dealing with complex employment requirements, our
            Employment Administration Service offers a complete solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
