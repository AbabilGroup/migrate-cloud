const Achievements = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="mx-auto flex max-w-[800px] flex-col items-center justify-between gap-16 lg:flex-row">
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">7+</h2>
            <p className="text-center font-semibold">Years of experience</p>
          </div>
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
              600+
            </h2>
            <p className="text-center font-semibold">Employees</p>
          </div>
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
              100%
            </h2>
            <p className="text-center font-semibold">Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
