const Features = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Employment Flexibility
          </h4>
          <p className="text-center">
            We offer effective manpower solutions for short-term projects or
            fluctuating workforce demands, ensuring operational efficiency.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Worker Assessment Before Employment
          </h4>
          <p className="text-center">
            We enable testing of workers before permanent employment to ensure
            successful cooperation and compatibility.
          </p>
        </div>
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            Streamlined Administration
          </h4>
          <p className="text-center">
            We handle all administrative tasks related to employment and HR, so
            you can focus on your core business activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
