const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Access to Qualified Talent
          </h4>
          <p className="text-center">
            At MigrateCloud, we offer a database of pre-verified candidates,
            minimizing the risks associated with hiring. Our process ensures
            access to skilled workers tailored to your needs.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Flexible Workforce Solutions
          </h4>
          <p className="text-center">
            We understand the importance of flexible workforce management,
            allowing you to adapt to changing demands efficiently.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Efficient Recruitment Process
          </h4>
          <p className="text-center">
            Our streamlined recruitment process accelerates finding, managing,
            and hiring workers, ensuring you meet your workforce needs promptly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
