const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">Save Time & Costs</h4>
          <p className="text-center">
            Eliminate the burden of complex administrative procedures and focus
            on your core business.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">Expert Assistance</h4>
          <p className="text-center">
            Our team ensures a seamless process while adhering to the latest
            legal requirements.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">Tailored Solutions</h4>
          <p className="text-center">
            We customize our services to meet your specific hiring needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
