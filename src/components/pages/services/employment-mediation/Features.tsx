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
            We proactively search and handpick potential candidates, utilizing
            our vast networks and databases.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Streamlined Recruitment Process
          </h4>
          <p className="text-center">
            We ensure the recruitment process is conducted with efficiency and
            precision.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Expert Guidance and Support at Every Stage
          </h4>
          <p className="text-center">
            We provide expert insights, ensuring informed decisions and
            successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
