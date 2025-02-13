const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Access to Skilled Workers
          </h4>
          <p className="text-center">
            A database of thoroughly vetted and qualified candidates.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Flexible Workforce Solutions
          </h4>
          <p className="text-center">
            Tailored hiring options to suit your operational needs.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Fast & Efficient Recruitment Process
          </h4>
          <p className="text-center">
            We accelerate the hiring and administrative processes, making
            recruitment seamless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
