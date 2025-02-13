import { FaRegFlag } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";

const Process = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegFolderOpen className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Step 1: Consultations
            </h5>
            <p className="text-center">
              Our team of specialists conducts an in-depth analysis of your
              workforce needs, crafting a tailored recruitment strategy.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <IoDocumentsOutline className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Step 2: Finding Talent
            </h5>
            <p className="text-center">
              With our extensive network and resources, we identify skilled
              candidates from across the globe that fit your business
              requirements.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegFlag className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Step 3: Selection Process
            </h5>
            <p className="text-center">
              We meticulously evaluate candidates’ qualifications, experience,
              and references to ensure we select the best individuals for your
              team.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegChartBar className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Step 4: Bringing Workers to Europe
            </h5>
            <p className="text-center">
              We handle all the necessary documentation and manage the
              relocation of workers to Europe.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            What Does the Process Look Like?
          </h2>
          <p>
            Leave all human resources concerns to us and ensure optimal
            management of your employees with our all-inclusive HR services!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
