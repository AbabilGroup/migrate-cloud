const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Access to Responsible Workers
          </h4>
          <p className="text-center">
            Gain access to a thoroughly vetted and skilled workforce.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Preventing Project Delays
          </h4>
          <p className="text-center">
            We ensure that projects are completed on schedule with a capable
            workforce.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Efficient and Streamlined Recruitment Process
          </h4>
          <p className="text-center">
            We expedite the process of sourcing, managing, and hiring workers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
