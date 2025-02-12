import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

const TheProcess = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1100px]">
        <h1 className="mb-20 text-center text-5xl font-bold">
          Hire a foreigner
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className="basis-full lg:basis-1/2">
            <Image
              className="h-auto w-full rounded-2xl"
              src="/images/the-process.png"
              alt="The Process"
              width={500}
              height={550}
            />
          </div>
          <div className="basis-full space-y-5 lg:basis-1/2">
            <h2 className="text-4xl font-bold">
              The Process of Hiring Skilled Workers from Abroad
            </h2>
            <p className="">
              Understand the key requirements your company must meet to
              successfully employ international professionals.
            </p>

            {/* lists */}
            <div className="grid grid-cols-1 gap-y-3">
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary mt-[3px]" />
                </div>
                <p className="font-medium">
                  Business Operational for Over 6 Months
                </p>
              </div>
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary mt-[3px]" />
                </div>
                <p className="font-medium">
                  At Least One Full-Time Employee for a Minimum of 6 Months
                </p>
              </div>
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary mt-[3px]" />
                </div>
                <p className="font-medium">
                  Local Workforce Comprising at Least 25% of Total Employees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
