const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Support Throughout the Entire HR Process
          </h4>
          <p className="text-center">
            From recruitment and administration to securing accommodation and
            providing ongoing assistance.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Access to HR Experts
          </h4>
          <p className="text-center">
            Benefit from the expertise of professionals with extensive
            experience in human resources.
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Focus on Business Goals
          </h4>
          <p className="text-center">
            Redirect your attention to achieving strategic objectives while we
            manage your HR needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
